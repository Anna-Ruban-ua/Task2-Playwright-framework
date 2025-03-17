# Redmine Autotest Playwright TypeScript

## Summary of Repo

This repository contains automated tests for Redmine, implemented using Playwright and TypeScript. The project follows the Page Object Model (POM) and utilizes Double POM for enhanced maintainability. The tests validate core functionalities of Redmine and generate detailed reports.

## Requirements

- Node.js (latest LTS version recommended)
- Playwright
- TypeScript
- Allure Report or ReportPortal (for reporting)
- GitHub (for version control and CI/CD integration)
- GitHub Actions (optional, for CI/CD pipeline)

## Steps to Install

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-url.git
   ```
2. Navigate to the project directory:
   ```sh
   cd redmine-autotest-playwright
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Steps to Launch

1. Run tests in headless mode:
   ```sh
   npx playwright test
   ```
2. Run tests in headed mode:
   ```sh
   npx playwright test --headed
   ```
3. Run a specific test:
   ```sh
   npx playwright test tests/example.spec.ts
   ```
4. Run tests with a specific tag:
   ```sh
   npx playwright test --grep @tag
   ```

## Steps to Creating the Report

1. Run tests and generate Allure results:
   ```sh
   npx playwright test --reporter=allure
   ```
2. Serve the Allure report:
   ```sh
   npx allure serve allure-results
   ```
3. (Optional) Publish Allure report on GitHub Pages via CI/CD.

## Test Cases

Detailed test cases are documented in [this spreadsheet](https://docs.google.com/spreadsheets/d/1GtBWbufhBap-kloWRCJnucLgD4-w5sHwZXUS0TgT3vs/edit?pli=1&gid=0#gid=0).

## Report

The latest test report is available [here](https://anna-ruban-ua.github.io/Task2-Playwright-framework/).