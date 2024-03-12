import { expect } from "@playwright/test";
import { test } from "../fixtures/myFixtures";

test.describe("Demo Blaze tests", () => {
  test("should return on home page after clicking on logo", async ({ page, homePage }) => {
    await homePage.navigate();

    const navigation = await homePage.header.navigation();

    await navigation[1].click();
    await page.waitForTimeout(2000);

    expect(1).toBe(1);
  });
});
