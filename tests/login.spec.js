const { test, expect } = require('@playwright/test');
const { Login } = require('../pageobejcts/Login.js');

test('Login test', async ({ page}) => {
//   const login = new Login(page);

//   await login.goto();

//   await login.signIn('appleheshuang@gmail.com', '87654312aA$');

//   // Add your assertions here to verify the login was successful
//   await expect(page).toHaveURL('https://www.stg.watercare.co.nz/');



await page.goto('https://www.watercare.co.nz/');

const page1Promise = page.waitForEvent('popup');
await page.getByRole('link', { name: 'MyAccount' }).click();
const page1 = await page1Promise;  
await page1.getByPlaceholder('Email Address').click();
await page1.getByPlaceholder('Email Address').fill('appleheshuang@gmail.com');
await page1.getByPlaceholder('Password').click();
await page1.getByPlaceholder('Password').fill('87654312aA$');
await page1.getByRole('button', { name: 'Sign in' }).click();
await page1.getByPlaceholder('Search for a property by').isVisible();


});
