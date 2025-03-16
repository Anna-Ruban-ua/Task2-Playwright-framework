import { test } from '../fixtures/loginFixture';
import { MyPage } from '../pages/MyPage';

test('User authentication with valid data', async ({ loginPage, validLoginData, page }) => {
    await loginPage.login(validLoginData.username, validLoginData.password);

    const myPage = new MyPage(page);
    await myPage.verifyLoginSuccess();
});
