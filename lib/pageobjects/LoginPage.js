const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.userID = page.locator('#email');
        this.password = page.locator('#password');
        this.signIn = page.locator("//button[contains(text(),'Log in with Email')]");
    }

    async goto(url, userID, password) {
        await this.page.goto(url);
        await this.userID.fill(userID);
        await this.password.fill(password);
        await this.signIn.click();

    }
    
};
