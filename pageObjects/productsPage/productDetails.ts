import { Locator } from "@playwright/test";
import { ProductCard } from "./productCard";

export class ProductDetails extends ProductCard {
  public constructor(protected readonly cardLocator: Locator) {
    super(cardLocator);
  }

  public async addToCart(): Promise<void> {
    await this.cardLocator.getByRole("link", { name: "Add to cart" }).click();
  }
}
