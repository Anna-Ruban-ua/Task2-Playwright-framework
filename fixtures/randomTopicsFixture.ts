import { test as base } from '@playwright/test';

export const test = base.extend<{ randomTopics: string[] }>({
    randomTopics: async ({ page }, use) => {
        const endpoints = [
            '/projects/redmine/issues',
            '/projects/redmine/news'
        ];

        let allTopics: string[] = [];

        for (const endpoint of endpoints) {
            await page.goto(endpoint);
            
            const topics = await page.locator('table.issues td.subject a, article.news-article h3 a').allInnerTexts();
            allTopics.push(...topics);
        }

        const randomTopics = allTopics.sort(() => 0.5 - Math.random()).slice(0, 3);
        await use(randomTopics);
    }
});
