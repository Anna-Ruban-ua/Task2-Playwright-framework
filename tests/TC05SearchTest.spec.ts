import { test } from '../fixtures/randomTopicsFixture';
import { SearchPage } from '../pages/SearchPage';

test('Verify Search Functionality with Random Topics', async ({ page, randomTopics }) => {
    const searchPage = new SearchPage(page);
    await searchPage.openSearchPage();

    for (const topic of randomTopics) {
        await searchPage.verifySearchResults(topic);
    }
});

