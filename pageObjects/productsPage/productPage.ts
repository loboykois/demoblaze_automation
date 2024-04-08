import { Locator, Page } from "@playwright/test";
import { ProductCard } from "./productCard";
import { BasePage } from "../basePage";

export class ProductPage extends BasePage {
  private readonly products: Locator;
  protected get path(): string {
    return "/";
  }

  public constructor(protected readonly page: Page) {
    super(page);
    this.products = this.page.locator("#contcont");
  }

  public async selectCategory(category: string): Promise<void> {
    await this.products.locator(".list-group a").getByText(category).click();
  }

  public async getAllProductsCards(): Promise<ProductCard[]> {
    await this.products.locator("#tbodyid").waitFor({ state: "visible" });

    const cards = await this.products.locator(".card").all();

    return cards.map((card) => new ProductCard(card));
  }
}
