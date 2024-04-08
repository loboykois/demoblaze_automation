import { Locator } from "@playwright/test";

export class CartItem {
  private readonly itemLocator: Locator;

  public constructor(itemLocator: Locator) {
    this.itemLocator = itemLocator;
  }

  public async deleteCartItem(): Promise<void> {
    await this.itemLocator.getByRole("link", { name: "Delete" }).click();
  }
}
