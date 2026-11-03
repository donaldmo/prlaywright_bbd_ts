import { Locator, Page } from "playwright";

export class WaitHelper {
  static async waitVisible(selector: Locator): Promise<void> {
    await selector.waitFor({ state: "visible" });
  }

  static async waitHidden(page: Page, selector: string): Promise<void> {
    await page.waitForSelector(selector, { state: "hidden" });
  }

  static async waitEnabled(page: Page, selector: string): Promise<void> {
    await page.waitForSelector(selector, { state: "attached" });
  }

  static async waitAttached(page: Page, selector: string): Promise<void> {
    await page.waitForSelector(selector, { state: "attached" });
  }

  static async waitDetached(page: Page, selector: string): Promise<void> {
    await page.waitForSelector(selector, { state: "detached" });
  }

  static async waitNavigation(page: Page) {
    await page.waitForLoadState('networkidle');
  }

  static async staticWait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
