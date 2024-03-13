import { expect } from "@playwright/test";
import { test } from "../fixtures/myFixtures";
import { NavigationBar, Routes } from "./demoBlaze.module";

test.describe("Demo Blaze tests", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
  });

  test("should return on home page when clicking on logo", async ({ page, homePage }) => {
    await homePage.header.clickOnLogo();

    await expect(page).toHaveURL(Routes.HomePage);
  });

  test("should return on home page when clicking on Home page in navigation bar", async ({ page, homePage }) => {
    await homePage.header.navigationMenu(NavigationBar.Home);

    await expect(page).toHaveURL(Routes.HomePage);
  });
});
