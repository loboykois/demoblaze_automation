import { Page } from "@playwright/test";
import { Header } from "./header";

export class HomePage {
  private readonly path: string = "/";
  public readonly header: Header;

  public constructor(private readonly page: Page) {
    this.header = new Header(page);
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }
}
