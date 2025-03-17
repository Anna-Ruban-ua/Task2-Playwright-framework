import { test, expect } from '../fixtures/loginFixture';
import { MyPage } from '../pages/MyPage';

test('User authentication with valid password', async ({ loginPage, validLoginData, page }) => {
    await loginPage.login(validLoginData.username, validLoginData.password);

    const myPage = new MyPage(page);
    expect(await myPage.isUserLoggedIn()).toBeTruthy();
});
