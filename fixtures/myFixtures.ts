import { test as base } from "@playwright/test";
import { DemoBlazePage } from "../pageObjects/demoBlazePage";

type MyFixtures = {
  demoBlazePage: DemoBlazePage;
};

export const test = base.extend<MyFixtures>({
  demoBlazePage: async ({ page }, use) => {
    const demoBlazePage = new DemoBlazePage(page);
    await use(demoBlazePage);
  },
});
