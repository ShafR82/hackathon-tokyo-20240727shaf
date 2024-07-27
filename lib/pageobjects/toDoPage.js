const { expect } = require("@playwright/test");
const { faker } = require('@faker-js/faker');



exports.toDoPage = class toDoPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.AddNew = page.locator('(//div[@class="flex gap-3"]//button)[3]');
        this.Column = page.locator('(//div[@class="flex gap-3"]//button)[2]');
        this.status = page.locator('(//div[@class="flex gap-3"]//button)[1]');
        this.title = page.locator('//*[@id="title"]');
        this.description = page.locator('//*[@id="description"]');
        this.dueDate = page.locator('//*[@id=":r19:"]/div[3]/div/button');
        this.dueDateClick = page.locator("//button[contains(text(),'16')]"); 
        this.ToDoStatus = page.locator('//div[@data-slot="mainWrapper"]//button');
        this.selectToDOActive = page.locator('(//*[@data-slot="listbox"]//li)[1]');
        this.selectToDOCompleted = page.locator('(//*[@data-slot="listbox"]//li)[2]');
        this.selectToDOBlock = page.locator('(//*[@data-slot="listbox"]//li)[3]');
        this.selectToDOOther = page.locator('(//*[@data-slot="listbox"]//li)[4]');
        his.newItemButton = page.locator('text="add_circle_outline"');
        this.close = page.locator("button[aria-label='Close']");
        this.submit = page.locator("button[type='submit']");
        this.back = page.locator("//button[normalize-space()='Back']");

    }

    generateToDoData(overrides = {}) {
        return {
            title: overrides.title || faker.lorem.words(3),
            description: overrides.description || faker.lorem.sentence(),
            dueDate: overrides.dueDate || faker.date.future(),
            status: overrides.status || faker.helpers.arrayElement(['Active', 'Completed', 'Block', 'Other'])
        };
    }

    async addNew(options = {}) {
        const todoData = this.generateToDoData(options);

        await this.AddNew.click();
        await this.title.fill(todoData.title);
        await this.description.fill(todoData.description);
        await this.dueDate.click();
        await this.dueDateClick.click();
        await this.ToDoStatus.click({ clickCount: 2 });
        switch (todoData.status) {
            case 'Active':
                await this.selectToDOActive.click();
                break;
            case 'Completed':
                await this.selectToDOCompleted.click();
                break;
            case 'Block':
                await this.selectToDOBlock.click();
                break;
            case 'Other':
                await this.selectToDOOther.click();
                break;
        }

        await this.submit.click();

    }

