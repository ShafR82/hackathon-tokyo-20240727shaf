const { test, expect } = require("@playwright/test");
const path = require('path');

const fs = require('fs');
const { UserStoriesPage } = require("../lib/pageobjects/UserStoriesPage");
const { assert } = require("console");
const { deepStrictEqual } = require("assert");
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
        
        let array = await userStories.page.locator('//td[@role="gridcell"]/span').allInnerTexts();
        let array2 = ['As a new user, I want to sign up for an account so that I can save my to-do items and access them from any device.',
            'As an existing user, I want to log in to my account so that I can access my saved to-do items',
            'As a user, I want to log out of my account.',
            'As a user, I want to create a new to-do item so that I can keep track of my tasks.',
            'As a user, I want to view a list of all my to-do items so that I can see what tasks I need to complete.',
            'As a user, I want to mark a to-do item as completed so that I can keep track of what I have accomplished.',
            'As a user, I want to edit a to-do item so that I can update its details if they change.',
            'As a user, I want to delete a to-do item so that I can remove tasks I no longer need.',
            'As a user, I want to sort my to-do items by different criteria (e.g., due date, status, creation date) so that I can manage my tasks more efficiently.',
            'As a user, I want to unhide/hide certain columns in the to-do list view so that I can focus only on the information that matters to me.',
            'As a user, I want to search for specific to-do items by keywords so that I can quickly find tasks related to certain topics or criteria.',
            'As a user, I want to toggle between dark mode and light mode so that I can choose the theme that is easiest on my eyes.'];
            
        await deepStrictEqual(array,array2);  
        
    });

});