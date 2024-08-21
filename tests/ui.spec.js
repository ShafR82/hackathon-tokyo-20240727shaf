const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;
const { LoginPage } = require("../lib/pageobjects/LoginPage");
const path = require('path');

const fs = require('fs');
const { assert } = require("console");
//const projectPath = process.cwd();
//console.log(projectPath);

//const filePath = path.join(projectPath, 'data\\credentials.json');
const filePath = 'C:/Users/Shafi/Workspaces/hackathon-tokyo-20240727shaf/data/credentials.json';
console.log(filePath);
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

    //SHAF: My first Playwright test 
    test("My first Playwright test", async ({ page }) => {
        console.log("Test Name: My first Playwright test!");
        await page.goto("https://todo-app-qajp.vercel.app/");
        await page.waitForLoadState('domcontentloaded');
        await page.getByRole('link', { name: 'User Stories' }).click();
        //await page.waitForURL('https://todo-app-qajp.vercel.app/userstories', "domcontentloaded");   
        await page.waitForTimeout(1000);   //NOT RECOMMENDED NEED FIX  
        let titre = await page.title();
        console.log("Titre: %s", titre);
        expect(titre).toContain("User Stories | Todos App");
    });
});