import { expect } from "@playwright/test";
import { test } from "../fixtures/myFixtures";
import { Routes } from "./data/routes";
import { NavigationBar } from "../pageObjects/header";

test.describe("Demo Blaze tests", () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigate();
  });

  test.describe("should redirect to", () => {
    test("should redirect to home page when clicking on logo", async ({ page, homePage }) => {
      await homePage.header.clickOnLogo();

      await expect(page).toHaveURL(Routes.HomePage);
    });

    test("should redirect to home page when clicking on Home page in navigation bar", async ({ page, homePage }) => {
      await homePage.header.navigationMenu(NavigationBar.Home);

      await expect(page).toHaveURL(Routes.HomePage);
    });

    test("should redirect to cart page when clicking on Cart in navigation bar", async ({ page, homePage }) => {
      await homePage.header.navigationMenu(NavigationBar.Cart);

      await expect(page).toHaveURL(Routes.CartPage);
    });
  });

  test("should open New message modal window when user clicks on Contacts", async ({ page, homePage }) => {
    await homePage.header.showContactsPopup();

    const modalWindow = page.locator(".modal-dialog").first();

    expect(modalWindow).toBeTruthy();
  });

  test("should open About us modal window when user clicks on About us in navigation", async ({ page, homePage }) => {
    await homePage.header.showAboutUsPopup();

    const modalWindow = page.locator("#videoModal");

    expect(modalWindow).toBeTruthy();
  });

  test("should open LogIn when modal window user clicks on LogIn in navigation", async ({ page, homePage }) => {
    await homePage.header.showLoginPopup();

    const modalWindow = page.locator("#logInModal");

    expect(modalWindow).toBeTruthy();
  });

  test("should open Sign up modal window when user clicks on Sign up in navigation", async ({ page, homePage }) => {
    await homePage.header.showSignupPopup();

    const modalWindow = page.locator("#signInModal");

    expect(modalWindow).toBeTruthy();
  });

  const modalTestCases = [
    { locator: "#singinModal", modalType: "Signup" },
    { locator: "#logInModal", modalType: "Login" },
    { locator: "#videoModal", modalType: "AboutUs" },
  ];

  for (const modalItem of modalTestCases) {
    test(`111 - should open ${modalItem.modalType} when user clicks in navigation`, async ({ page, homePage }) => {
      await homePage.header[`show${modalItem.modalType}Popup`]();

      const modalWindow = page.locator(modalItem.locator);

      expect(modalWindow).toBeTruthy();
    });
  }
});
