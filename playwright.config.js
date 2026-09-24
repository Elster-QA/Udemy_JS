import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: './Udemy_JS',
  timeout: 30000,// (5 * 1000)- таймАут
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
        launchOptions: { slowMo: 250 }, // замедление 0.5 сек между действиями
      },
     },
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
    /*Test browser for mobile*/
     {
      name: 'Mobile chrome',
      use: { 
        ...devices['Pixel 5'],//Это конфиг под мобильный браузер. В этой строке указываем девайс под которым будет проходить тест.
        headless: true,               
        launchOptions: { slowMo: 250 }, 
      },
    },
    //  {
    //   name: 'Mobile safari',
    //   use: { 
    //     ...devices['iPhone 12'],//Это конфиг под мобильный браузер. В этой строке указываем девайс под которым будет проходить тест.
    //     headless: true,               
    //     launchOptions: { slowMo: 250 }, 
    //   },
    // },
    

    
  ],
});
