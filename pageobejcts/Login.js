const { expect } = require('@playwright/test');

class Login {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.MyAccount=page.getByRole('link', { name: 'MyAccount' }).click
    this.username = page.locator('(//input[@id="outlined-name"])[1]');
    this.password = page.locator('(//input[@id="outlined-name"])[2]');
    this.signIn = page.locator('(//span[normalize-space()="SIGN IN"])[1]');
  }

  async goto() {
    try {
      await this.page.goto('https://www.stg.watercare.co.nz/');
      console.log('Navigated to the login page.');
    } catch (error) {
      console.error('Failed to navigate to the login page:', error);
    }
  }

  async signIn(username, password) {
    try {
      await this.username.fill(username);
      await this.password.fill(password);
      await this.signIn.click();
      console.log('Sign-in attempted.');
    } catch (error) {
      console.error('Failed to sign in:', error);
    }
  }
}

module.exports = { Login };
