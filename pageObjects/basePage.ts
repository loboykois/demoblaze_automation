import { Page } from "@playwright/test";
import { Header } from "./header";
import { Footer } from "./footer";

export abstract class BasePage {
  public readonly header: Header;
  public readonly footer: Footer;
  protected abstract get path(): string;

  protected constructor(protected readonly page: Page) {
    this.header = new Header(page);
    this.footer = new Footer(page);
  }

  public async navigate(): Promise<void> {
    await this.page.goto(this.path);
  }
}
