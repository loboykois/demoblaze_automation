import { Page } from "@playwright/test";
import { Header } from "./header";
import { Footer } from "./footer";

export abstract class BasePage {
  public readonly header: Header;
  public readonly footer: Footer;

  protected constructor(protected readonly page: Page) {
    this.header = new Header(page);
    this.footer = new Footer(page);
  }

  // public async navigate(path: string): Promise<void> {
  //   await this.page.goto(path);
  // }

  protected abstract navigate(): Promise<void>;
}
