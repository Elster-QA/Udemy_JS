import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: './Udemy_JS',
  timeout: 10000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'line',

   
  

  use: {
    trace: 'on-first-retry',
    baseURL: 'http://localhost:2221/' //это базовый ЮРЛ. В тестах мы только указываем путь и ендпоинт, а основной ЮРЛ берется отсюда.
    
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        headless: true,               // окно будет НЕ видно(true)
        launchOptions: { slowMo: 1000 }, // замедление 0.5 сек между действиями
      },
    },
    // {
    //   name: 'firefox',
    //   use: { 
    //   ...devices['Desktop Firefox'],
    //   headless: false,
    //   launchOptions: { slowMo: 1000 },
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: { 
    //   ...devices['Desktop Safari'],
    //   headless: false,
    //   launchOptions: { slowMo: 1000 },
    //   },
    // },
  ],
});
