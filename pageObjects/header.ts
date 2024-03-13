import { Locator, Page } from "@playwright/test";

export class Header {
  private readonly navbar: Locator;

  public constructor(private readonly page: Page) {
    this.navbar = this.page.locator("ul.navbar-nav");
  }

  public async clickOnLogo(): Promise<void> {
    await this.page.locator("#nava").click();
  }

  public async navigationMenu(navItem: string): Promise<void> {
    await this.navbar.getByText(navItem).click();
  }
}
