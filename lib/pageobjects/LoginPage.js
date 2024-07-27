const { expect } = require("@playwright/test");
const { faker } = require('@faker-js/faker');

exports.LoginPage = class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.signInButtonStart = page.locator("//button[contains(text(),'Sign In')]"); 
        this.userID = page.locator('#email');
        this.password = page.locator('#password');
        this.signIn = page.locator("//button[contains(text(),'Log in with Email')]");
        
        this.signUp = page.locator("//button[contains(text(),'Sign up')]");
        this.email = page.locator("//input[@id='email']");
        this.password = page.locator("//input[@id='password']");
        
        this.todo = page.locator('//button[@role="menuitem"]');
        this.home = page.locator('(//div[@role="menuitem"])[1]');
        this.about = page.locator('(//div[@role="menuitem"])[2]');
        this.preference = page.locator('(//div[@role="menuitem"])[3]');
        this.signout = page.locator('(//div[@role="menuitem"])[4]');
        this.getStartNow = page.locator('//*[@id="hero"]/div[2]/a/button');
        this.userStories = page.locator('(//div[@class="relative z-[2]"]//a)[2]');

        this.icon = page.locator('(//div[@class="relative z-[2]"]//ul)[2]//nav');
        this.logOutMenu = page.locator("(//div[@role='menuitem'])[8]");
    }
    //Test 1
    async goto(url, userID, password) {
        await this.page.goto(url);
        await this.signInButtonStart.click();
        await this.userID.fill(userID);
        await this.password.fill(password);
        await this.signIn.click();

    }
    //Test 2
    async logOutAfterLogin(){
        await this.todo.click();
        await this.signout.click();
    }
    //Test 3
    async logOutAfterGoingBackToHome(){
        await this.todo.click();
        await this.home.click();
        await this.icon.click();
        await this.menulogOut();
    
    }

    async SignUpTest(){
        await this.signUp.click();
        await this.email.fill(faker.internet.email());
        await this.password.fill(faker.internet.password());
        await this.signUp.click();
    }

    async menulogOut(){
        await this.logOutMenu.click();
    }
    async home(){
        await this.todo.click();
        await this.home.click();
    }

    async testgetStartNowButton(){
        await this.home();
        await this.signInButtonStart.click();
    }
    async getStartNow(){
        await this.home();
        await this.getStartNow.click();
    }

    async userStories(){
        await this.userStories.click();
    }
    
};
