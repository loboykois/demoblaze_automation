import { Locator, Page } from "@playwright/test";
import { BasePage } from "../basePage";
import { Routes } from "../../tests/data/routes";
import { CartItem } from "./cartItem";

export class CartPage extends BasePage {
  private readonly pageWrapper: Locator;
  protected get path(): string {
    return `/${Routes.CartPage}`;
  }

  public constructor(protected readonly page: Page) {
    super(page);
    this.pageWrapper = page.locator("#page-wrapper");
  }

  public async getAllProductsItems(): Promise<CartItem[]> {
    await this.pageWrapper.locator("#tbodyid").waitFor({ state: "visible" });
    const cartItems = await this.page.locator(".success").all();

    return cartItems.map((item) => new CartItem(item));
  }

  public async getTotalPrice(): Promise<string> {
    return this.pageWrapper.locator("#totalp").innerText();
  }
}
