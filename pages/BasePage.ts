import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(endpoint: string = '') {
        await this.page.goto(endpoint, { waitUntil: 'load' });
    }

    async fillField(locator: Locator, value: string) {
        await locator.waitFor({ state: 'visible', timeout: 10000 });
        await locator.fill(value);
    }

    async clickElement(locator: Locator) {
        await locator.waitFor({ state: 'visible', timeout: 10000 });
        if (!(await locator.isEnabled())) {
            throw new Error('Element is not enabled');
        }
        await locator.click();
    }

    async hoverElement(locator: Locator) {
        await locator.waitFor({ state: 'visible', timeout: 10000 });
        await locator.hover();
    }

    async getTexts(locator: Locator): Promise<string[]> {
        await locator.waitFor({ state: 'visible', timeout: 10000 });
        return await locator.allInnerTexts();
    }
}
