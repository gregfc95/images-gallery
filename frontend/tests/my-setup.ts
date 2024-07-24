import { test as base, expect, Page } from '@playwright/test';
export { expect };

const test = base.extend<{
  basePage: { page: Page };
}>({
  basePage: async ({ page }, use) => {
    await page.goto('baseURL');
    await page.waitForTimeout(3000);
    await use({ page });
  },
});

export { test };
