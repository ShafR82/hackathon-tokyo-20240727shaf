const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;
const { LoginPage } = require("../lib/pageobjects/LoginPage");
const path = require('path');

const fs = require('fs');
const { assert } = require("console");
const projectPath = process.cwd();
console.log("Project Path: %s", projectPath);

const filePath = path.join(projectPath, 'data/credentials.json');

console.log("File Path: %s",filePath);

// Read credentials from JSON file
const credentials = JSON.parse(fs.readFileSync(filePath, 'utf8'));
test.describe("ui functional Test", () => {

    test("Login test", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto(credentials.url,credentials.userID,credentials.password);
        //expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("Sign Up test", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto(credentials.url,credentials.userID,credentials.password);
        await loginPage.SignUpTest();
        //expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("Log Out after Login test", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto(credentials.url,credentials.userID,credentials.password);
        
        await loginPage.logOutAfterLogin();

        //expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("Log Out after Login back home test", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto(credentials.url,credentials.userID,credentials.password);
        await loginPage.logOutAfterGoingBackToHome();
        //expect(accessibilityScanResults.violations).toEqual([]);
    });

    
});
