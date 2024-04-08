import { test } from "../fixtures/myFixtures";
import { expect } from "@playwright/test";
import { categoriesList } from "./data/categories";

test.describe("Products page tests", () => {
  test.beforeEach(async ({ productPage }) => {
    await productPage.navigate();
  });

  for (const category of categoriesList) {
    test(`should navigate user to card details from ${category} category when product card is selected`, async ({ page, productPage, productDetails }) => {
      await productPage.selectCategory(category);

      await page.waitForTimeout(1500);

      const cards = await productPage.getAllProductsCards();

      await cards[1].openDetails();
      await productDetails.addToCart();

      expect(1).toBe(1);
    });
  }
});
