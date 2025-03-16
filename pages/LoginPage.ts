import { BasePage } from './BasePage';
import { expect, Page, Locator } from '@playwright/test';

export class LoginPage extends BasePage {
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-submit');
        this.errorMessage = page.locator('#flash_error');
    }

    async login(username: string, password: string) {
        await this.fillField(this.usernameInput, username);
        await this.fillField(this.passwordInput, password);
        await this.clickElement(this.loginButton);
    }

    async loginError() {
        await expect(this.errorMessage).toHaveText('Invalid user or password');
    }

}
