const { test, expect } = require("@playwright/test");
const path = require('path');

const fs = require('fs');
const projectPath = process.cwd();

console.log("Project Path: %s",projectPath);

const filePath = path.join(projectPath, 'data/credentials.json');
console.log("File Path: %s",filePath);

// Read credentials from JSON file
const credentials = JSON.parse(fs.readFileSync(filePath, 'utf8'));

test.describe("ui functional Test", () => {

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