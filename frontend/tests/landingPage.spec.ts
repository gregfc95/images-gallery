/* eslint-disable prettier/prettier */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable prettier/prettier */
/* eslint-disable jest/no-conditional-expect */

import {test, expect } from './my-setup'

test('has title, navbar and searcher', async ({ basePage: {page} }) => {
  await page.goto('baseURL');
  await expect(page).toHaveTitle(/Images Gallery/);
  await expect(page.getByTestId('navbar')).toBeVisible();
  const searchButton = page.getByRole('button', { name: 'Search' });
  await expect(searchButton).toBeVisible();
  await expect(searchButton).toBeEnabled();

});

test('condional logic based on card-image presence', async ({ basePage: {page} }) => {
  const welcomeMessageLocator = page.getByText('Simple App for search photos using Unsplash API. In order to start enter any search term in the input field');
  const isWelcomeMessageVisible = await welcomeMessageLocator.isVisible();
  if (!isWelcomeMessageVisible) {
    await expect(page.getByTestId('card')).toBeVisible();
  } else {
    // Fail the test if the welcome message is visible when it shouldn't be
    await expect(page.getByRole('link',{name: 'Learn more'})).toBeVisible();
  }
});
