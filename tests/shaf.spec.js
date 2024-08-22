const { test, expect } = require("@playwright/test");
const path = require('path');

const fs = require('fs');
const { UserStoriesPage } = require("../lib/pageobjects/UserStoriesPage");
const projectPath = process.cwd();

console.log("Project Path: %s",projectPath);

const filePath = path.join(projectPath, 'data/credentials.json');
console.log("File Path: %s",filePath);

// Read credentials from JSON file
const credentials = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Here you'll find my first Playwright tests  
test.describe("First playwright Test", () => {

    /*SHAF: My first Playwright test, the goal of this test is to check the "User Stories" page's title
    , the title should be "User Stories | Todos App". Also I'm not using the page objects created by 
    Subhajit on purpose as I want to learn step by step :-)*/
    test("User Stories page title test", async ({ page }) => {
        console.log("Test Name: My first Playwright test!");
        await page.goto("https://todo-app-qajp.vercel.app/");
        await page.getByRole('link', { name: 'User Stories' }).click();
        await page.waitForTimeout(1000);   //NOT RECOMMENDED NEED FIX  
        let titre = await page.title();
        console.log("Titre: %s", titre);
        expect(titre).toContain("User Stories | Todos App");
    });

    test("User Stories Content", async({page}) => {
        console.log("User Stories content");
        const userStories = new UserStoriesPage(page);
        await userStories.UserStories();
        /*not really testing the content of the page here but just for testing purpose I'll check the title
        like in my previous test*/
        expect(await userStories.page.title()).toContain("User Stories | Todos App");  
    }); 
    
});