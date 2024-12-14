import { expect, test } from "@playwright/test"

import { DrinkCodes } from "#src/constants/config"

test.describe("Index page should redirect to first DrinkCodes entry", () => {
  test("", async ({ page }) => {
    await page.goto("/")
    await page.waitForURL(DrinkCodes.A1)
  })
})

test.describe("Not supported pages should return not found page", () => {
  test("", async ({ page }) => {
    await page.goto("/random-not-existing-value")
    const notFoundText = await page.getByText("not found").textContent()
    expect(notFoundText).not.toBeNull()
  })
})
