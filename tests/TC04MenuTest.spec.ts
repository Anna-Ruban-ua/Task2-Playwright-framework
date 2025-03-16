import { test } from '../fixtures/loginFixture';
import { HomePage } from '../pages/HomePage';

test('All Menu Elements are displayed and loading', async ({ loginPage, validLoginData, page }) => {
    await loginPage.login(validLoginData.username, validLoginData.password);

    const homePage = new HomePage(page);
    await homePage.menuNavigationCheck();
});