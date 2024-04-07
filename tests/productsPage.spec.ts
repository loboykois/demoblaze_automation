import { test } from "../fixtures/myFixtures";
import { expect } from "@playwright/test";
import { Categories } from "../pageObjects/productsPage/productPage";

test.describe("Products page tests", () => {
  test.beforeEach(async ({ productPage }) => {
    await productPage.navigate();
  });

  test("should add product to shopping cart when Add to cart button is clicked", async ({ page, productPage }) => {
    await productPage.selectCategory(Categories.Phone);

    const cards = await productPage.getAllProductsCards();
    await cards[0].selectCard();

    expect(page.url()).toBe("https://www.demoblaze.com/prod.html?idp_=1");
  });
});
