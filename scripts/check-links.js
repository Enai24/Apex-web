#!/usr/bin/env node

/**
 * Link Checker Script
 * Scans all source files for internal links and validates they exist
 * Usage: node scripts/check-links.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// All valid routes in the application
const validRoutes = new Set([
  '/',
  '/about',
  '/about#culture',
  '/about#certifications',
  '/careers',
  '/clients',
  '/client',
  '/contact',
  '/contact#office-locations',
  '/employers',
  '/industries',
  '/job-seekers',
  '/legal',
  '/legal-services',
  '/partners',
  '/portfolio',
  '/privacy-policy',
  '/terms-of-service',
  '/updates',
  '/services',
  '/services/contract-staffing',
  '/services/permanent-recruitment',
  '/services/executive-search',
  '/services/specialised-hiring',
  '/services/payroll-services',
  '/services/payroll-compliance',
  '/services/regulatory-compliance',
  '/services/labour-law-advisory',
  '/services/industrial-housekeeping',
  '/services/hr-outsourcing',
  '/ai-workforce-solutions',
  '/ai-resume-screening',
  '/ai-voice-connect',
  '/locations/delhi',
  '/locations/bangalore',
  '/locations/mumbai',
]);

// Dynamic route patterns
const dynamicRoutePatterns = [
  /^\/ai-workforce-solutions\/[^/]+$/,
  /^\/locations\/[^/]+$/,
  /^\/industries\/[^/]+$/,
  /^\/jobs\/[^/]+$/,
];

// Static files that exist in public folder
const staticFiles = new Set([
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/site.webmanifest',
  '/logo.png',
]);

function isValidRoute(href) {
  // Remove query parameters and hash for validation
  const cleanHref = href.split('?')[0].split('#')[0];
  if (validRoutes.has(cleanHref)) return true;
  if (validRoutes.has(href)) return true;
  if (staticFiles.has(cleanHref)) return true;
  return dynamicRoutePatterns.some(pattern => pattern.test(cleanHref));
}

const linkRegex = /href=["']([^"']+)["']/g;
const issues = [];

// Scan all TSX/TS files
const files = glob.sync('src/**/*.{tsx,ts}', { cwd: path.join(__dirname, '..') });

files.forEach(file => {
  const content = fs.readFileSync(path.join(__dirname, '..', file), 'utf-8');
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];

    // Skip template literals (contains ${})
    if (href.includes('${')) continue;

    // Skip external links, anchors only, mailto, tel, javascript
    if (href.startsWith('http') || href.startsWith('#') ||
        href.startsWith('mailto:') || href.startsWith('tel:') ||
        href.startsWith('javascript:')) {
      continue;
    }

    if (!isValidRoute(href)) {
      issues.push({ file, href, line: content.substring(0, match.index).split('\n').length });
    }
  }
});

if (issues.length > 0) {
  console.error('❌ Broken links found:\n');
  issues.forEach(issue => {
    console.error(`  ${issue.file}:${issue.line} -> ${issue.href}`);
  });
  process.exit(1);
} else {
  console.log('✅ All internal links are valid');
}
