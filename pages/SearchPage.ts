import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

export class SearchPage extends BasePage {
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly searchResults: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator('#search-input');
        this.searchButton = page.locator('input[type="submit"]');
        this.searchResults = page.locator('#search-results');
    }

    async openSearchPage() {
        await this.goto('/search');
    }

    async search(query: string) {
        await this.fillField(this.searchInput, query);
        await this.clickElement(this.searchButton);
    }

    async getSearchResults(): Promise<string[]> {
        return await this.getTexts(this.searchResults);
    }

    async verifySearchResults(topic: string) {
        await this.search(topic);
        const results = await this.getSearchResults();
        
        const found = results.some(result => result.includes(topic));
        expect(found).toBeTruthy();
    }
}

