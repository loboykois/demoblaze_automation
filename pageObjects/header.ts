import { Locator, Page } from "@playwright/test";

export class Header {
  public constructor(private readonly page: Page) {}

  public async clickOnLogo(): Promise<void> {
    await this.page.locator("#nava").click();
  }

  public async navigation(): Promise<Locator[]> {
    return await this.page.locator(".nav-item").all();
  }
}
