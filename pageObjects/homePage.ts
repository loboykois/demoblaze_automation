import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  private readonly path: string = "/";

  public constructor(protected readonly page: Page) {
    super(page);
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }
}
