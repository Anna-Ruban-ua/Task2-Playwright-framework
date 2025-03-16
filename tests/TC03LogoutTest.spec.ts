import { test } from '../fixtures/loginFixture';
import { MyPage } from '../pages/MyPage';

test('Logout', async ({ loginPage, validLoginData, page }) => {
    await loginPage.login(validLoginData.username, validLoginData.password);

    const myPage = new MyPage(page);
    await myPage.logout();

});