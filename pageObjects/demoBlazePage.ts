import { Page } from "@playwright/test";

export class DemoBlazePage {
  constructor(private readonly page: Page) {}

  public async navigate() {
    await this.page.goto("https://www.google.co.uk/");
  }
}
