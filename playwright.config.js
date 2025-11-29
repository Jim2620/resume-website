import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
  },

  projects: [
    {
      name: 'firefox',
      use: devices['Desktop Firefox'],
    },
  ],

  webServer: {
    command: 'npm start',
    port: 3000,
    reuseExistingServer: true,
  },
});