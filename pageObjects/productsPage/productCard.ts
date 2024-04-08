import { Locator } from "@playwright/test";

export class ProductCard {
  protected readonly cardLocator: Locator;

  public constructor(cardLocator: Locator) {
    this.cardLocator = cardLocator;
  }

  public async openDetails(): Promise<void> {
    await this.cardLocator.locator(".card-title a").click();
  }
}
