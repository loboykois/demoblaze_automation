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

      // await cartItems[0].deleteCartItem();
      // await page.waitForTimeout(1500);

      // const totalPrice = await cartPage.getTotalPrice();

      // expect(totalPrice).toBeFalsy();
    });
  }
});
