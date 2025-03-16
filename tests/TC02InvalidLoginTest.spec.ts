import { test } from '../fixtures/loginFixture';

test('User authentication with invalid data', async ({ loginPage, invalidLoginData }) => {
    await loginPage.login(invalidLoginData.username, invalidLoginData.password);
    await loginPage.loginError();
});