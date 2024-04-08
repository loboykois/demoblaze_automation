import { test as base } from "@playwright/test";
import { HomePage } from "../pageObjects/homePage";
import { CartPage } from "../pageObjects/cartPage/cartPage";
import { ProductPage } from "../pageObjects/productsPage/productPage";
import { ProductDetails } from "../pageObjects/productsPage/productDetails";

type MyFixtures = {
  homePage: HomePage;
  cartPage: CartPage;
  productPage: ProductPage;
  productDetails: ProductDetails;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page);
    await use(productPage);
  },
  productDetails: async ({ page }, use) => {
    const productDetails = new ProductDetails(page);
    await use(productDetails);
  },
});
