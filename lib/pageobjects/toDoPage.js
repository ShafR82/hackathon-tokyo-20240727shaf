const { expect } = require("@playwright/test");

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

    async addNew(title,description,dueDate) {
        await this.AddNew.click();
        await this.title.fill();
        await this.description.fill();
        await this.dueDate.click();
        await this.ToDoStatus.click();

            //Active Completed Block Other
            if(ToDoVal = "Active"){
                this.selectToDOActive.click();
            }else if(ToDoVal = "Active"){
                this.selectToDOCompleted.click();
            }else if(ToDoVal = "Block"){
                this.selectToDOBlock.click();
            }else if(ToDoVal = "Other"){
                this.selectToDOOther.click();
            }
        }

        //add the date

    }

    async getLastTableItem() {
        let rows = this.tableRows;
        return rows.last();
    }
};
