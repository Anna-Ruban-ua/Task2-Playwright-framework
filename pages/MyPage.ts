import { BasePage } from './BasePage'
import { expect, Page, Locator } from '@playwright/test';

export class MyPage extends BasePage {
    private loggedAsText: Locator;
    private logoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.loggedAsText = page.locator('#loggedas');
        this.logoutButton = page.locator('.logout');
    }

    async verifyLoginSuccess() {
        await expect(this.loggedAsText).toBeVisible();
    }

    async logout() {
        await this.clickElement(this.logoutButton);
        await expect(this.loggedAsText).not.toBeVisible();
    }

}