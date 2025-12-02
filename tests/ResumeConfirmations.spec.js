import { test, expect } from "@playwright/test";

const websiteURL = "http://localhost:3000";

test("My name is visible on the page", async ({ page }) => {
  await page.goto(websiteURL);
  await expect(page.locator("h1")).toHaveText(/Jim Liriano/);
});

test("dark mode toggle works", async ({ page }) => {
  await page.goto(websiteURL);
  const toggleButton = page.locator(".theme-toggle-button");

  // Click to activate dark mode
  await toggleButton.click();

  // Verify dark mode applied
  const body = page.locator("body");
  await expect(body).toHaveClass(/dark-mode/);

  // Click again to switch back to light mode
  await toggleButton.click();
  await expect(body).not.toHaveClass(/light-mode/);
});

test("light mode toggle works", async ({ page }) => {
  await page.goto(websiteURL);
  const toggleButton = page.locator(".theme-toggle-button");
  const body = page.locator("body");

  // Activate dark mode
  await toggleButton.click();
  await expect(body).toHaveClass(/dark-mode/);

  // Click again → switch to light mode
  await toggleButton.click();

  // Light mode should REMOVE dark-mode class
  await expect(body).not.toHaveClass(/dark-mode/);
});

test("moon icon is visible on page load", async ({ page }) => {
  await page.goto(websiteURL);
  const moonIcon = page.getByAltText("Moon icon");
  await expect(moonIcon).toBeVisible();
});

test("sun icon appears after toggling dark mode", async ({ page }) => {
  await page.goto(websiteURL);
  const toggleButton = page.locator(".theme-toggle-button");

  // Click to toggle to dark mode
  await toggleButton.click();
  const sunIcon = page.getByAltText("Sun icon");
  await expect(sunIcon).toBeVisible();
});

test("Confirms Linkedin Button opens new a new tab to the right page", async ({
  page,
  context,
}) => {
  await page.goto(websiteURL);

  const link = page.locator('[data-testid="linkedin-button"]');
  await expect(link).toBeVisible();

  const [popup] = await Promise.all([
    context.waitForEvent("page"),
    link.click(),
  ]);

  await popup.waitForLoadState();
  expect(popup.url()).toContain("linkedin.com");

  // Confirms it opens in new tab
  const target = await link.getAttribute("target");
  expect(target).toBe("_blank");
});

test("Confirms Github Button opens new a new tab to the right page", async ({
  page,
  context,
}) => {
  await page.goto(websiteURL);

  const link = page.locator('[data-testid="github-button"]');
  await expect(link).toBeVisible();

  const [popup] = await Promise.all([
    context.waitForEvent("page"),
    link.click(),
  ]);

  await popup.waitForLoadState();
  expect(popup.url()).toContain("github.com");

  // Confirms it opens in new tab
  const target = await link.getAttribute("target");
  expect(target).toBe("_blank");
});

test("Confirms Pluralsight link opens in a new tab", async ({
  page,
  context,
}) => {
  await page.goto(websiteURL);

  const link = page.locator('[data-testid="pluralsight-link"]');
  await expect(link).toBeVisible();

  await expect(link).toHaveAttribute("href", /pluralsight\.com/);

  // Clicks the link and Waits for the page to open on a new tab
  const [popup] = await Promise.all([
    context.waitForEvent("page"),
    link.click(),
  ]);
  await popup.waitForLoadState("domcontentloaded");
  expect(popup.url()).toContain("pluralsight.com");

  // Confirms it opens in new tab
  const target = await link.getAttribute("target");
  expect(target).toBe("_blank");
});
