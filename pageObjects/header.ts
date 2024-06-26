import { Locator, Page } from "@playwright/test";

export enum NavigationBar {
  Home = "Home",
  Contact = "Contact",
  AboutUs = "About us",
  Cart = "Cart",
  LogIn = "Log in",
  SignUp = "Sign up",
}

export enum ModalType {
  SignUp = "#signInModal",
}

const modalLinksMap = new Map([[ModalType.SignUp, NavigationBar.SignUp]]);

export class Header {
  private readonly navbar: Locator;

  public constructor(private readonly page: Page) {
    this.navbar = this.page.locator("ul.navbar-nav");
  }

  public async clickOnLogo(): Promise<void> {
    await this.page.locator("#nava").click();
  }

  public async navigationMenu(navItem: string): Promise<void> {
    await this.navbar.getByText(navItem).click();
  }

  public async showContactsPopup(): Promise<void> {
    await this.navigationMenu(NavigationBar.Contact);
    const contactsPopup = this.page.locator(".modal-dialog").first();
    await contactsPopup.waitFor({ state: "visible" });
  }

  public async showAboutUsPopup(): Promise<void> {
    await this.navigationMenu(NavigationBar.AboutUs);
    const aboutUsPopup = this.page.locator("#videoModal").first();
    await aboutUsPopup.waitFor({ state: "visible" });
  }

  public async showLoginPopup(): Promise<void> {
    await this.navigationMenu(NavigationBar.LogIn);
    const loginPopup = this.page.locator("#logInModal").first();
    await loginPopup.waitFor({ state: "visible" });
  }

  public async showSignupPopup(): Promise<void> {
    await this.navigationMenu(NavigationBar.SignUp);
    const signInPopup = this.page.locator("#signInModal").first();
    await signInPopup.waitFor({ state: "visible" });
  }

  public async showModal(modalType: ModalType): Promise<void> {
    await this.navigationMenu(modalLinksMap.get(modalType)!);
    const signInPopup = this.page.locator(modalType);
    await signInPopup.waitFor({ state: "visible" });
  }
}
