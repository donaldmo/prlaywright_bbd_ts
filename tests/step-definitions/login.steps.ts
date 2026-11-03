import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../../pages/login.page";
import { ENV } from "../../config/env";
import { Logger } from "../../utils/logger";
import { loginData } from "../../utils/testData";

let loginPage: LoginPage;

Given("user is on login page", async function () {
  Logger.info("Navigating to login page");
  loginPage = new LoginPage(this.page);
  await loginPage.navigation(ENV.baseUrl);
});

When(
  "user enters username {string} and password {string}",
  async function (username, password) {
    Logger.info(`Logging in with username: ${username}`);
    await loginPage.login(username, password);
  },
);

Then("user should see {string}", async function (results) {
  Logger.info(`Verifying that user sees: ${results}`);
});

When("user login in with test data", async function () {
  Logger.info(`Logging in with test data`);

  const testUser = loginData[0];
  await loginPage.login(testUser.username, testUser.password);
});
