import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as fs from 'fs';
import * as path from 'path';

const testDataPath = path.resolve(__dirname, '../testData.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));

export const test = base.extend<{
  loginPage: LoginPage;
  validLoginData: { username: string; password: string };
}>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto('/login');
    await use(loginPage);
  },

  validLoginData: async ({}, use) => {
    await use(testData.validLoginData);
  },
});

export { expect } from '@playwright/test';
