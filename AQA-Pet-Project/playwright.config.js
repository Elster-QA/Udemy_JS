const path = require('path');
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  globalSetup: require.resolve('./utils/globalSetup.js'),
  timeout: 80000,
  fullyParallel: true,
  forbidOnly: false,
  retries: 0,
  reporter: 'line',

  use: {
    trace: 'on-first-retry',
    baseURL: 'https://automationexercise.com',
    ...devices['Desktop Chrome'],
    headless: true,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
