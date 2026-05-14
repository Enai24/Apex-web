import { test, expect } from '@playwright/test';

test.describe('Homepage E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Apex Enterprises/);
  });

  test('all main navigation links work', async ({ page }) => {
    const navLinks = [
      { text: 'About', path: '/about/' },
      { text: 'Services', path: '/services/' },
      { text: 'Contact', path: '/contact/' },
      { text: 'Careers', path: '/careers/' },
    ];

    for (const link of navLinks) {
      await page.goto('/');
      const navLink = page.getByRole('link', { name: link.text });
      if (await navLink.isVisible().catch(() => false)) {
        await navLink.click();
        await expect(page).toHaveURL(new RegExp(link.path));
      }
    }
  });

  test('footer links are not broken', async ({ page }) => {
    const footerLinks = await page.locator('footer a').all();
    
    for (const link of footerLinks) {
      const href = await link.getAttribute('href');
      if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        await link.click();
        // Check for 404 or error
        const errorText = await page.locator('text=404').isVisible().catch(() => false);
        expect(errorText).toBeFalsy();
        await page.goto('/');
      }
    }
  });

  test('page is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.locator('main')).toBeVisible();
  });

  test('page has no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    expect(consoleErrors).toEqual([]);
  });
});
