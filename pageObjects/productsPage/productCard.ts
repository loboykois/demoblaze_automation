import { Locator } from "@playwright/test";

export class ProductCard {
  protected readonly cardLocator: Locator;

  public constructor(cardLocator: Locator) {
    this.cardLocator = cardLocator;
  }

  public async selectCard(): Promise<void> {
    await this.cardLocator.locator(".card-title > a").click();
  }

  // public async getTitle(): Promise<void> {
  //   await this.cardLocator.locator(".card-title").textContent();
  // }

  // public async getPrice(): Promise<string | undefined> {
  //   const priceValue = await this.cardLocator.locator("h5").textContent();

  //   return priceValue?.split("").splice(1).join("");
  // }

  // public async getDescription(): Promise<void> {
  //   await this.cardLocator.locator(".card-text").textContent();
  // }
}
