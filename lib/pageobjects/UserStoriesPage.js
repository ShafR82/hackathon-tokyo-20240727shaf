class UserStoriesPage {
    /**
     * @param {import('playwright').Page} page
     */
    constructor(page) {
      this.page = page;
      this.UserStoriesHref = page.locator('//a[@href="/userstories"]');

    }
    async UserStories() {
        await this.page.goto("https://todo-app-qajp.vercel.app/");
        await this.UserStoriesHref.click();
        await this.page.waitForTimeout(1000);   //NOT RECOMMENDED NEED FIX  
    }
  
  }
  module.exports = { UserStoriesPage };