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

    async isUserLoggedIn(): Promise<boolean> {
        try {
            await this.loggedAsText.waitFor({ state: 'visible', timeout: 5000 });
            return await this.loggedAsText.isVisible();
        } catch (error) {
            return false;
        }
    }

    async logout() {
        await this.clickElement(this.logoutButton);
        await expect(this.loggedAsText).not.toBeVisible();
    }

}