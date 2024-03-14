import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  protected get path(): string {
    return "/";
  }

  public constructor(protected readonly page: Page) {
    super(page);
  }
}
