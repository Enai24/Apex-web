#!/usr/bin/env node

/**
 * SEO Validation Script
 * 
 * This script checks the SEO implementation across the site and reports any issues.
 * Run with: node scripts/check-seo.js
 */

import fs from 'fs';
import path from 'path';
import glob from 'glob';
import chalk from 'chalk';

// Constants for validation
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 60;
const MIN_DESCRIPTION_LENGTH = 70;
const MAX_DESCRIPTION_LENGTH = 160;
const REQUIRED_META_TAGS = ['title', 'description', 'keywords'];
const STRUCTURED_DATA_TYPES = ['Organization', 'Service', 'FAQPage', 'LocalBusiness', 'BreadcrumbList', 'JobPosting'];

// Define SEO check areas and messages
const checkMessages = {
  title: {
    tooShort: `Title is too short. Should be at least ${MIN_TITLE_LENGTH} characters.`,
    tooLong: `Title is too long. Should be maximum ${MAX_TITLE_LENGTH} characters.`,
    missing: 'Title tag is missing.',
    duplicate: 'Duplicate title found across multiple pages.',
  },
  description: {
    tooShort: `Description is too short. Should be at least ${MIN_DESCRIPTION_LENGTH} characters.`,
    tooLong: `Description is too long. Should be maximum ${MAX_DESCRIPTION_LENGTH} characters.`,
    missing: 'Meta description is missing.',
    duplicate: 'Duplicate description found across multiple pages.',
  },
  keywords: {
    missing: 'Meta keywords are missing.',
    tooFew: 'Too few keywords. Include at least 3 relevant keywords.',
  },
  headings: {
    missingH1: 'No H1 heading found on the page.',
    multipleH1: 'Multiple H1 headings found on the page. There should be only one.',
    emptyH1: 'Empty H1 heading found.',
    headingOrder: 'Heading hierarchy is not in order (e.g., H3 before H2).',
  },
  images: {
    missingAlt: 'Images missing alt attributes.',
    emptyAlt: 'Images with empty alt attributes.',
  },
  structure: {
    missingCanonical: 'Canonical URL is missing.',
    missingLanguage: 'Language attribute missing in html tag.',
    missingViewport: 'Viewport meta tag is missing.',
  },
  performance: {
    largeImages: 'Large unoptimized images detected.',
    missingLazyLoading: 'Images below the fold missing lazy loading attribute.',
  },
  structuredData: {
    missing: 'No structured data found on the page.',
    invalidFormat: 'Structured data has invalid format.',
    missingType: 'Structured data missing required type property.',
  }
};

// Helper function to log results
function logResult(message, status, details = '') {
  const statusIcon = status === 'pass' 
    ? chalk.green('✓') 
    : (status === 'warn' ? chalk.yellow('⚠') : chalk.red('✗'));
  
  console.log(`${statusIcon} ${message}${details ? ': ' + details : ''}`);
}

// Main function to check SEO
async function checkSEO() {
  console.log(chalk.blue.bold('🔍 Starting SEO validation check...\n'));
  
  // Check if SEO components are being used
  console.log(chalk.blue.bold('Checking SEO component usage:'));
  const componentUsageCheck = checkComponentUsage();
  
  // Check meta tags in React components
  console.log('\n' + chalk.blue.bold('Checking meta tags in React components:'));
  const metaTagsCheck = checkMetaTags();
  
  // Check Structured Data
  console.log('\n' + chalk.blue.bold('Checking structured data:'));
  const structuredDataCheck = checkStructuredData();
  
  // Check image optimization
  console.log('\n' + chalk.blue.bold('Checking image optimization:'));
  const imageCheck = checkImageOptimization();
  
  // Check sitemap and robots.txt
  console.log('\n' + chalk.blue.bold('Checking sitemap and robots.txt:'));
  checkSitemapAndRobots();
  
  // Check for local SEO implementation
  console.log('\n' + chalk.blue.bold('Checking local SEO implementation:'));
  checkLocalSEO();
  
  // Summary of checks
  console.log('\n' + chalk.blue.bold('SEO Check Summary:'));
  const totalChecks = 
    componentUsageCheck.total + 
    metaTagsCheck.total + 
    structuredDataCheck.total + 
    imageCheck.total;
  
  const totalPassing = 
    componentUsageCheck.passing + 
    metaTagsCheck.passing + 
    structuredDataCheck.passing + 
    imageCheck.passing;
  
  const totalWarnings = 
    componentUsageCheck.warnings + 
    metaTagsCheck.warnings + 
    structuredDataCheck.warnings + 
    imageCheck.warnings;
  
  const totalErrors = 
    componentUsageCheck.errors + 
    metaTagsCheck.errors + 
    structuredDataCheck.errors + 
    imageCheck.errors;
  
  console.log(`Total checks: ${totalChecks}`);
  console.log(`Passing: ${chalk.green(totalPassing)}`);
  console.log(`Warnings: ${chalk.yellow(totalWarnings)}`);
  console.log(`Errors: ${chalk.red(totalErrors)}`);
  
  // Print overall status
  if (totalErrors > 0) {
    console.log('\n' + chalk.red.bold('❌ SEO check failed with errors. Please fix the issues above.'));
    process.exit(1);
  } else if (totalWarnings > 0) {
    console.log('\n' + chalk.yellow.bold('⚠️ SEO check passed with warnings. Consider addressing the issues above.'));
    process.exit(0);
  } else {
    console.log('\n' + chalk.green.bold('✅ All SEO checks passed!'));
    process.exit(0);
  }
}

// Check if SEO components are being used
function checkComponentUsage() {
  const files = glob.sync('src/components/**/*.{tsx,jsx}');
  let seoComponentCount = 0;
  let headComponentCount = 0;
  let localSeoComponentCount = 0;
  let total = 3;
  let passing = 0;
  let warnings = 0;
  let errors = 0;
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('SEO ') || content.includes('<SEO')) {
      seoComponentCount++;
    }
    if (content.includes('Head ') || content.includes('<Head')) {
      headComponentCount++;
    }
    if (content.includes('LocalSEO ') || content.includes('<LocalSEO')) {
      localSeoComponentCount++;
    }
  });
  
  if (seoComponentCount > 0) {
    logResult('SEO component is being used', 'pass', `${seoComponentCount} components`);
    passing++;
  } else {
    logResult('SEO component is not being used', 'error', 'No usage found');
    errors++;
  }
  
  if (headComponentCount > 0) {
    logResult('Head component is being used', 'pass', `${headComponentCount} components`);
    passing++;
  } else {
    logResult('Head component is not being used', 'warn', 'No usage found');
    warnings++;
  }
  
  if (localSeoComponentCount > 0) {
    logResult('LocalSEO component is being used', 'pass', `${localSeoComponentCount} components`);
    passing++;
  } else {
    logResult('LocalSEO component is not being used', 'warn', 'Consider implementing for location pages');
    warnings++;
  }
  
  return { total, passing, warnings, errors };
}

// Check meta tags in React components
function checkMetaTags() {
  const files = glob.sync('src/components/**/*.{tsx,jsx}');
  const titles = new Map();
  const descriptions = new Map();
  let missingTitles = 0;
  let missingDescriptions = 0;
  let missingKeywords = 0;
  let shortTitles = 0;
  let longTitles = 0;
  let shortDescriptions = 0;
  let longDescriptions = 0;
  let total = 7;
  let passing = 0;
  let warnings = 0;
  let errors = 0;
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for title
    const titleMatch = content.match(/title=["']([^"']+)["']/);
    if (titleMatch) {
      const title = titleMatch[1];
      titles.set(title, (titles.get(title) || 0) + 1);
      
      if (title.length < MIN_TITLE_LENGTH) {
        shortTitles++;
      } else if (title.length > MAX_TITLE_LENGTH) {
        longTitles++;
      }
    } else if (content.includes('<SEO') || content.includes('<Head')) {
      missingTitles++;
    }
    
    // Check for description
    const descMatch = content.match(/description=["']([^"']+)["']/);
    if (descMatch) {
      const description = descMatch[1];
      descriptions.set(description, (descriptions.get(description) || 0) + 1);
      
      if (description.length < MIN_DESCRIPTION_LENGTH) {
        shortDescriptions++;
      } else if (description.length > MAX_DESCRIPTION_LENGTH) {
        longDescriptions++;
      }
    } else if (content.includes('<SEO') || content.includes('<Head')) {
      missingDescriptions++;
    }
    
    // Check for keywords
    if (!content.match(/keywords=["'][^"']+["']/) && 
        (content.includes('<SEO') || content.includes('<Head'))) {
      missingKeywords++;
    }
  });
  
  // Check for duplicate titles
  const duplicateTitles = [...titles.entries()].filter(([_, count]) => count > 1);
  if (duplicateTitles.length === 0) {
    logResult('No duplicate titles found', 'pass');
    passing++;
  } else {
    logResult('Duplicate titles found', 'error', `${duplicateTitles.length} duplicates`);
    errors++;
  }
  
  // Check for duplicate descriptions
  const duplicateDescs = [...descriptions.entries()].filter(([_, count]) => count > 1);
  if (duplicateDescs.length === 0) {
    logResult('No duplicate descriptions found', 'pass');
    passing++;
  } else {
    logResult('Duplicate descriptions found', 'error', `${duplicateDescs.length} duplicates`);
    errors++;
  }
  
  // Check for missing titles
  if (missingTitles === 0) {
    logResult('All SEO components have title', 'pass');
    passing++;
  } else {
    logResult('SEO components missing title', 'error', `${missingTitles} components`);
    errors++;
  }
  
  // Check for missing descriptions
  if (missingDescriptions === 0) {
    logResult('All SEO components have description', 'pass');
    passing++;
  } else {
    logResult('SEO components missing description', 'error', `${missingDescriptions} components`);
    errors++;
  }
  
  // Check for title length
  if (shortTitles === 0 && longTitles === 0) {
    logResult('All titles have appropriate length', 'pass');
    passing++;
  } else {
    if (shortTitles > 0) {
      logResult('Titles that are too short', 'warn', `${shortTitles} titles`);
      warnings++;
    }
    if (longTitles > 0) {
      logResult('Titles that are too long', 'warn', `${longTitles} titles`);
      warnings++;
    }
  }
  
  // Check for description length
  if (shortDescriptions === 0 && longDescriptions === 0) {
    logResult('All descriptions have appropriate length', 'pass');
    passing++;
  } else {
    if (shortDescriptions > 0) {
      logResult('Descriptions that are too short', 'warn', `${shortDescriptions} descriptions`);
      warnings++;
    }
    if (longDescriptions > 0) {
      logResult('Descriptions that are too long', 'warn', `${longDescriptions} descriptions`);
      warnings++;
    }
  }
  
  // Check for keywords
  if (missingKeywords === 0) {
    logResult('All SEO components have keywords', 'pass');
    passing++;
  } else {
    logResult('SEO components missing keywords', 'warn', `${missingKeywords} components`);
    warnings++;
  }
  
  return { total, passing, warnings, errors };
}

// Check Structured Data
function checkStructuredData() {
  const files = glob.sync('src/components/**/*.{tsx,jsx}');
  let structuredDataCount = 0;
  let missingTypeCount = 0;
  let total = 2;
  let passing = 0;
  let warnings = 0;
  let errors = 0;
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('schema={') || content.includes('structuredData={')) {
      structuredDataCount++;
      
      // Check for missing type in schema
      const hasType = STRUCTURED_DATA_TYPES.some(type => content.includes(`@type': '${type}'`) || content.includes(`"@type": "${type}"`));
      if (!hasType) {
        missingTypeCount++;
      }
    }
  });
  
  if (structuredDataCount > 0) {
    logResult('Structured data is being used', 'pass', `${structuredDataCount} components`);
    passing++;
  } else {
    logResult('Structured data is not being used', 'warn', 'No usage found');
    warnings++;
  }
  
  if (missingTypeCount === 0) {
    logResult('All structured data has proper type', 'pass');
    passing++;
  } else {
    logResult('Structured data missing proper type', 'error', `${missingTypeCount} schemas`);
    errors++;
  }
  
  return { total, passing, warnings, errors };
}

// Check image optimization
function checkImageOptimization() {
  const files = glob.sync('src/components/**/*.{tsx,jsx}');
  let imagesWithAlt = 0;
  let imagesWithoutAlt = 0;
  let imagesWithLazyLoading = 0;
  let imagesWithoutLazyLoading = 0;
  let total = 2;
  let passing = 0;
  let warnings = 0;
  let errors = 0;
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Extract img tags
    const imgRegex = /<img[^>]+>/g;
    const imgTags = content.match(imgRegex) || [];
    
    imgTags.forEach(imgTag => {
      // Check for alt attribute
      if (imgTag.includes('alt=')) {
        imagesWithAlt++;
      } else {
        imagesWithoutAlt++;
      }
      
      // Check for lazy loading
      if (imgTag.includes('loading="lazy"')) {
        imagesWithLazyLoading++;
      } else {
        imagesWithoutLazyLoading++;
      }
    });
  });
  
  if (imagesWithoutAlt === 0) {
    logResult('All images have alt attributes', 'pass');
    passing++;
  } else {
    logResult('Images missing alt attributes', 'error', `${imagesWithoutAlt} images`);
    errors++;
  }
  
  if (imagesWithoutLazyLoading === 0) {
    logResult('All images have lazy loading', 'pass');
    passing++;
  } else {
    logResult('Images missing lazy loading', 'warn', `${imagesWithoutLazyLoading} images`);
    warnings++;
  }
  
  return { total, passing, warnings, errors };
}

// Check sitemap and robots.txt
function checkSitemapAndRobots() {
  // Check if sitemap exists
  if (fs.existsSync('public/sitemap.xml')) {
    const sitemapContent = fs.readFileSync('public/sitemap.xml', 'utf8');
    const urlCount = (sitemapContent.match(/<url>/g) || []).length;
    logResult('Sitemap exists', 'pass', `${urlCount} URLs`);
    
    // Check if all important routes are included
    const missingRoutes = [];
    ['/', '/about', '/services', '/contact'].forEach(route => {
      if (!sitemapContent.includes(`<loc>https://apexenterprises.net${route}</loc>`)) {
        missingRoutes.push(route);
      }
    });
    
    if (missingRoutes.length === 0) {
      logResult('All important routes included in sitemap', 'pass');
    } else {
      logResult('Some important routes missing from sitemap', 'warn', missingRoutes.join(', '));
    }
  } else {
    logResult('Sitemap is missing', 'error', 'public/sitemap.xml not found');
  }
  
  // Check if robots.txt exists
  if (fs.existsSync('public/robots.txt')) {
    const robotsContent = fs.readFileSync('public/robots.txt', 'utf8');
    
    if (robotsContent.includes('Sitemap:')) {
      logResult('Robots.txt contains sitemap reference', 'pass');
    } else {
      logResult('Robots.txt missing sitemap reference', 'warn');
    }
    
    if (robotsContent.includes('User-agent: *')) {
      logResult('Robots.txt has user-agent directive', 'pass');
    } else {
      logResult('Robots.txt missing user-agent directive', 'error');
    }
  } else {
    logResult('Robots.txt is missing', 'error', 'public/robots.txt not found');
  }
}

// Check for local SEO implementation
function checkLocalSEO() {
  const files = glob.sync('src/components/**/*.{tsx,jsx}');
  let localSEOCount = 0;
  let hasLocalBusiness = false;
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('<LocalSEO') || content.includes('LocalSEO ')) {
      localSEOCount++;
    }
    
    if (content.includes('@type": "LocalBusiness"') || 
        content.includes('@type\': \'LocalBusiness\'') ||
        content.includes('generateLocalBusinessSchema')) {
      hasLocalBusiness = true;
    }
  });
  
  if (localSEOCount > 0) {
    logResult('LocalSEO component is used', 'pass', `${localSEOCount} components`);
  } else {
    logResult('No LocalSEO component usage found', 'warn', 'Consider adding location-specific pages');
  }
  
  if (hasLocalBusiness) {
    logResult('LocalBusiness schema is implemented', 'pass');
  } else {
    logResult('No LocalBusiness schema found', 'warn', 'Consider adding for better local SEO');
  }
}

// Run the main function
checkSEO().catch(error => {
  console.error(chalk.red('Error running SEO check:'), error);
  process.exit(1);
}); 