import { test } from '../fixtures/loginFixture';
import { generateInvalidPassword } from '../utils/helpers';
import * as fs from 'fs';
import * as path from 'path';

const testDataPath = path.resolve(__dirname, '../testData.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));

test('User authentication with an invalid password', async ({ loginPage }) => {
    const validUsername = testData.validLoginData.username;
    const invalidPassword = generateInvalidPassword();

    await loginPage.login(validUsername, invalidPassword);
    await loginPage.loginError();
});
