import { expect, Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(endpoint: string = '') {
        await this.page.goto(endpoint, { waitUntil: 'load' });
    }

    async fillField(locator: Locator, value: string) {
        await expect(locator).toBeVisible();
        await locator.fill(value);
    }

    async clickElement(locator: Locator) {
        await expect(locator).toBeVisible();
        await locator.click();
    }

    async hoverElement(locator: Locator) {
        await expect(locator).toBeVisible();
        await locator.hover();
    }

    async getTexts(locator: Locator): Promise<string[]> {
        await expect(locator).toBeVisible();
        return await locator.allInnerTexts();
    }
}