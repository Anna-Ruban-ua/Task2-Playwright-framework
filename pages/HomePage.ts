import { BasePage } from './BasePage'
import { expect, Page, Locator } from '@playwright/test';

export class HomePage extends BasePage {
    private homeButton: Locator;
    private newObject: Locator;
    private newIssue: Locator;
    private newWiki: Locator;
    private overview: Locator
    private download: Locator;
    private activity: Locator;
    private roadmap: Locator;
    private issues: Locator;
    private news: Locator;
    private wiki: Locator;
    private forums: Locator;
    private repository: Locator;

    constructor(page: Page) {
        super(page);
        this.homeButton = page.locator('a.home');
        this.newObject = page.locator('#new-object');
        this.newIssue = page.locator('a.new-issue-sub');
        this.newWiki = page.locator('a.new-wiki-page');
        this.overview = page.locator('a.overview');
        this.download = page.locator('a.download');
        this.activity = page.locator('a.activity');
        this.roadmap = page.locator('a.roadmap');
        this.issues = page.locator('a.issues');
        this.news = page.locator('a.news');
        this.wiki = page.locator('a.wiki');
        this.forums = page.locator('a.boards');
        this.repository = page.locator('a.repository');
    }

    async menuNavigationCheck () {
        await this.clickElement(this.homeButton);

        await this.hoverElement(this.newObject);
        await expect(this.newIssue).toBeVisible();
        await expect(this.newWiki).toBeVisible();

        await this.clickElement(this.overview);
        await expect(this.page).toHaveURL('/projects/redmine');

        await this.clickElement(this.download);
        await expect(this.page).toHaveURL('/projects/redmine/wiki/Download');

        await this.clickElement(this.activity);
        await expect(this.page).toHaveURL('/projects/redmine/activity');

        await this.clickElement(this.roadmap);
        await expect(this.page).toHaveURL('/projects/redmine/roadmap');

        await this.clickElement(this.issues);
        await expect(this.page).toHaveURL('/projects/redmine/issues');

        await this.clickElement(this.news);
        await expect(this.page).toHaveURL('/projects/redmine/news');

        await this.clickElement(this.wiki);
        await expect(this.page).toHaveURL('/projects/redmine/wiki');

        await this.clickElement(this.forums);
        await expect(this.page).toHaveURL('/projects/redmine/boards');

        await this.clickElement(this.repository);
        await expect(this.page).toHaveURL('/projects/redmine/repository');
    }

}