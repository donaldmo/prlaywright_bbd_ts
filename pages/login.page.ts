import { Page } from "playwright";
import { BasePage } from "./base.page";
import { WaitHelper } from "../utils/waitHelper";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string) {
    await WaitHelper.waitVisible(
      this.page.getByRole("textbox", { name: "Username" }),
    );

    await this.page.getByRole("textbox", { name: "Username" }).click();
    await this.page.getByRole("textbox", { name: "Username" }).fill(username);
    await this.page.getByRole("textbox", { name: "Password" }).click();
    await this.page.getByRole("textbox", { name: "Password" }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
    await WaitHelper.waitNavigation(this.page);
  }
}
