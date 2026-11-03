import { Page } from "playwright";

export class BasePage {
    constructor(protected page: Page) {}

    async navigation(url: string): Promise<void> {
        await this.page.goto(url);
    }
}