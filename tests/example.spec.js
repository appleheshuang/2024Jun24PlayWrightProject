// @ts-check
const { test, expect } = require('@playwright/test');

test ('clickSearchButton',async({ page })=>{
await page.goto('https://www.google.com/');
await page.getByLabel('Search', { exact: true }).fill('Playwright');
// await page.getByRole('button', { name: 'Google Search' }).click();
await page.getByLabel('Google Search').first().click();
await expect(page.getByRole('link', { name: 'Playwright: Fast and reliable' })).toHaveCount(1);
})

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.await page.goto('https://www.google.com/search?q=playwright&sca_esv=115f0f3a83152c1e&sca_upv=1&source=hp&ei=fuqBZq3oBv2hseMPoN2d2AY&iflsig=AL9hbdgAAAAAZoH4jgh7wmBE6BDlE_n2n21Cph_ASus_&ved=0ahUKEwitn8vivYSHAxX9UGwGHaBuB2sQ4dUDCA8&uact=5&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEAmAIAoAIAmAMAkgcAoAcA&sclient=gws-wiz');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
