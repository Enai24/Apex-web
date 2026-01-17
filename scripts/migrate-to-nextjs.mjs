#!/usr/bin/env node

/**
 * Migration script to update React Router and Helmet imports for Next.js
 */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const SRC_DIR = './src';

async function getFilesRecursive(dir) {
    const files = [];
    const items = await readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = join(dir, item.name);
        if (item.isDirectory()) {
            files.push(...await getFilesRecursive(fullPath));
        } else if (item.name.endsWith('.tsx') || item.name.endsWith('.ts')) {
            files.push(fullPath);
        }
    }

    return files;
}

async function migrateFile(filePath) {
    let content = await readFile(filePath, 'utf-8');
    let modified = false;

    // Skip App.tsx as it will be replaced entirely
    if (filePath.includes('App.tsx') || filePath.includes('main.tsx')) {
        return { path: filePath, modified: false, skipped: true };
    }

    // Add 'use client' if file uses hooks or router
    const needsUseClient =
        content.includes('useState') ||
        content.includes('useEffect') ||
        content.includes('useLocation') ||
        content.includes('useNavigate') ||
        content.includes('useParams') ||
        content.includes('useSearchParams');

    if (needsUseClient && !content.startsWith("'use client'")) {
        content = "'use client';\n\n" + content;
        modified = true;
    }

    // Replace react-router-dom imports
    if (content.includes('react-router-dom')) {
        // Replace Link import
        content = content.replace(
            /import\s*{\s*([^}]*Link[^}]*)\s*}\s*from\s*['"]react-router-dom['"]/g,
            (match, imports) => {
                const importList = imports.split(',').map(i => i.trim()).filter(Boolean);
                const linkImports = importList.filter(i => i === 'Link');
                const otherImports = importList.filter(i => i !== 'Link');

                let result = '';
                if (linkImports.length > 0) {
                    result += "import Link from 'next/link';\n";
                }

                // Handle navigation hooks
                const navHooks = otherImports.filter(i =>
                    ['useLocation', 'useNavigate', 'useParams', 'useSearchParams'].includes(i)
                );
                const remaining = otherImports.filter(i =>
                    !['useLocation', 'useNavigate', 'useParams', 'useSearchParams', 'Navigate'].includes(i)
                );

                if (navHooks.length > 0) {
                    const mappedHooks = navHooks.map(h => {
                        if (h === 'useLocation') return 'usePathname';
                        if (h === 'useParams') return 'useParams';
                        if (h === 'useSearchParams') return 'useSearchParams';
                        return h;
                    });
                    result += `import { ${mappedHooks.join(', ')} } from 'next/navigation';\n`;
                }

                if (remaining.length > 0) {
                    result += `// TODO: Handle these router imports: ${remaining.join(', ')}\n`;
                }

                return result.trim();
            }
        );

        // Replace `to=` with `href=` in Link components
        content = content.replace(/(<Link[^>]*)\sto=/g, '$1 href=');

        // Replace useLocation().pathname with usePathname()
        content = content.replace(/const\s+location\s*=\s*useLocation\(\)/g, 'const pathname = usePathname()');
        content = content.replace(/location\.pathname/g, 'pathname');

        // Replace useNavigate with useRouter
        if (content.includes('useNavigate')) {
            content = content.replace(/import\s*{\s*useNavigate\s*}\s*from\s*['"]next\/navigation['"]/g, '');
            content = content.replace(/from 'next\/navigation'/g,
                match => match.includes('useRouter') ? match : match.replace("'next/navigation'", "'next/navigation'")
            );
            if (!content.includes("import { useRouter }")) {
                content = content.replace(
                    /(import\s*{[^}]*)\s*from\s*['"]next\/navigation['"]/,
                    (match, imports) => {
                        if (!imports.includes('useRouter')) {
                            return `${imports}, useRouter } from 'next/navigation'`;
                        }
                        return match;
                    }
                );
            }
            content = content.replace(/const\s+navigate\s*=\s*useNavigate\(\)/g, 'const router = useRouter()');
            content = content.replace(/navigate\(([^)]+)\)/g, 'router.push($1)');
        }

        modified = true;
    }

    // Replace react-helmet with Next.js metadata (for client components, we'll remove Helmet)
    if (content.includes('react-helmet')) {
        content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async?['"]/g, '');
        content = content.replace(/import\s*Helmet\s*from\s*['"]react-helmet['"]/g, '');
        // Comment out Helmet usage - this will need manual attention
        content = content.replace(/<Helmet>/g, '{/* <Helmet> */}');
        content = content.replace(/<\/Helmet>/g, '{/* </Helmet> */}');
        modified = true;
    }

    if (modified) {
        await writeFile(filePath, content, 'utf-8');
    }

    return { path: filePath, modified, skipped: false };
}

async function main() {
    console.log('Starting Next.js migration...\n');

    const files = await getFilesRecursive(SRC_DIR);
    console.log(`Found ${files.length} TypeScript files to process\n`);

    const results = await Promise.all(files.map(migrateFile));

    const modified = results.filter(r => r.modified);
    const skipped = results.filter(r => r.skipped);

    console.log('\n--- Migration Summary ---');
    console.log(`Total files: ${files.length}`);
    console.log(`Modified: ${modified.length}`);
    console.log(`Skipped: ${skipped.length}`);

    if (modified.length > 0) {
        console.log('\nModified files:');
        modified.forEach(r => console.log(`  - ${r.path}`));
    }

    console.log('\n--- Next Steps ---');
    console.log('1. Review modified files for any remaining issues');
    console.log('2. Update page components to use Next.js Metadata API');
    console.log('3. Run `npm install` to install dependencies');
    console.log('4. Run `npm run dev` to start the development server');
}

main().catch(console.error);
