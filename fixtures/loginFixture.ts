import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend<{
  loginPage: LoginPage;
  validLoginData: { username: string; password: string };
  invalidLoginData: { username: string; password: string };
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto('/login');
    await use(loginPage);
  },

  validLoginData: async ({}, use) => {
    await use({
      username: 'anna.ruban0902',
      password: 'HuuJoo23!'
    });
  },

  invalidLoginData: async ({ validLoginData }, use) => {
    const isUsernameInvalid = Math.random() > 0.5;
    const invalidUsername = `invalid${Math.random().toString(36).substring(7)}`;
    const invalidPassword = `InvPass${Math.random().toString(36).substring(5)}`;

    await use({
      username: isUsernameInvalid ? invalidUsername : validLoginData.username,
      password: isUsernameInvalid ? validLoginData.password : invalidPassword,
    });
  },

});