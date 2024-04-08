import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";

export class ProductDetails extends BasePage {
  private readonly details: Locator;
  protected get path(): string {
    return "/**";
  }

  public constructor(protected readonly page: Page) {
    super(page);
    this.details = this.page.locator(".product-deatil");
  }

  public async addToCart(): Promise<void> {
    await this.details.getByRole("link", { name: "Add to cart" }).click();
  }
}
