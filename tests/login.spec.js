const { test, expect } = require('@playwright/test');
const { Login } = require('./Login.js');

test('Login test', async ({ page }) => {
//   const login = new Login(page);

//   await login.goto();

//   await login.signIn('appleheshuang@gmail.com', '87654312aA$');

//   // Add your assertions here to verify the login was successful
//   await expect(page).toHaveURL('https://www.stg.watercare.co.nz/');

  await page.goto('https://www.stg.watercare.co.nz/');

  await page.getByRole('link', { name: 'MyAccount' }).click();
  const page1Promise = page.waitForEvent('popup');
  const page1 = await page1Promise;
  await page1.goto('https://wslpwb2cprd.b2clogin.com/wslpwb2cprd.onmicrosoft.com/b2c_1_sign_up_or_sign_in_myaccount/oauth2/v2.0/authorize?client_id=83cb000c-9845-4a70-b0a0-850704d1e0d2&scope=offline_access%20openid%20profile%20email&response_type=code&redirect_uri=https%3A%2F%2Fmyaccount.watercare.co.nz%2Fapi%2Fauth%2Fcallback%2Fazure-ad-b2c&grant_type=authorization_code_with_pkce&code_challenge=JFFBJXGdU4sNS_EycUts3Pl2Eyzl7x9o3r2XYUufvJo&code_challenge_method=S256');
  await page1.getByPlaceholder('Email Address').click();
  await page1.getByPlaceholder('Email Address').fill('appleheshuang@gmail.com');
  await page1.getByPlaceholder('Password').click();
  await page1.getByPlaceholder('Password').fill('87654312aA$');
  await page1.getByRole('button', { name: 'Sign in' }).click();
  await page1.goto('https://myaccount.watercare.co.nz/properties');
});
