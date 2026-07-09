import { test } from "@playwright/test"

test("Product Page Add To Basket", async ({ page }) => {
    await page.goto("localhost:2221")
    await page.pause()
})

// Если в строке есть методы которые возвращают локатор=(НЕ возвращают Промис), то в этой же строке(в самомо начале) НЕ указываем await
// Если в строке есть методы которые возвращают Промис, то в этой же строке(в самомо начале) указываем await