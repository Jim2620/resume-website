import { test, expect } from '@playwright/test';

test('My name is visible on the page', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toHaveText(/Jim Liriano/);
});

test('dark mode toggle works', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const toggleButton = page.locator('.theme-toggle-button');

  // Click to activate dark mode
  await toggleButton.click();

  // Verify dark mode applied
  const body = page.locator('body');
  await expect(body).toHaveClass(/dark-mode/);

  // Click again to switch back to light mode
  await toggleButton.click();
  await expect(body).not.toHaveClass(/light-mode/);
});

test('light mode toggle works', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const toggleButton = page.locator('.theme-toggle-button');
  const body = page.locator('body');

  // Activate dark mode
  await toggleButton.click();
  await expect(body).toHaveClass(/dark-mode/);

  // Click again → switch to light mode
  await toggleButton.click();

  // Light mode should REMOVE dark-mode class
  await expect(body).not.toHaveClass(/dark-mode/);
});

test('moon icon is visible on page load', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const moonIcon = page.getByAltText("Moon icon");
  await expect(moonIcon).toBeVisible();
});

test('sun icon appears after toggling dark mode', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const toggleButton = page.locator('.theme-toggle-button');

  // Click to toggle to dark mode
  await toggleButton.click();
  const sunIcon = page.getByAltText("Sun icon");
  await expect(sunIcon).toBeVisible();
});