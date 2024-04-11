import { test } from "../fixtures/myFixtures";
import { expect } from "@playwright/test";
import { categoriesList } from "./data/categories";
import { NavigationBar } from "../pageObjects/header";
import { Routes } from "./data/routes";

test.describe("Products page tests", () => {
  test.beforeEach(async ({ productPage }) => {
    await productPage.navigate();
  });

  for (const category of categoriesList) {
    test(`should navigate user to card details from ${category} category when product card is selected`, async ({ baseURL, page, homePage, productPage, productDetails, cartPage }) => {
      await productPage.selectCategory(category);

      await page.waitForTimeout(1500);

      const cards = await productPage.getAllProductsCards();

      await cards[1].openDetails();
      await productDetails.addToCart();

      await homePage.header.navigationMenu(NavigationBar.Cart);
      expect(page.url()).toBe(`${baseURL}${Routes.CartPage}`);

      const cartItems = await cartPage.getAllProductsItems();
      expect(cartItems.length > 0).toBeTruthy();
    });
  }

  for (const category of categoriesList) {
    test(`should redirect to product details page when user clicked on product card in ${category}`, async ({ page, productPage }) => {
      await productPage.selectCategory(category);
      await page.waitForTimeout(1500);

      const cards = await productPage.getAllProductsCards();

      for (let i = 0; i < cards.length; i++) {
        await cards[i].openDetails();
        await expect(page).toHaveURL(new RegExp(`${Routes.ProductDetailsPage}?(.*)$`));
        await page.goBack();
        await productPage.selectCategory(category);
        await page.waitForTimeout(1500);
      }
    });
  }
});
