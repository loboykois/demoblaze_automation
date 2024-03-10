import { expect } from "@playwright/test";
import { test } from "../fixtures/myFixtures";

test("test", async ({ demoBlazePage }) => {
  await demoBlazePage.navigate();

  expect(1).toBe(1);
});
