# dZENcode - UI Automation Tests

Автоматизированные UI-тесты для сайта [https://rahulshettyacademy.com/seleniumPractise/#/](https://rahulshettyacademy.com/seleniumPractise/#/) на базе Playwright.

## Требования

- Node.js v18+
- Playwright v1.45+

## Установка

1. Клонируй репозиторий:
```bash
git clone https://github.com/dZENcode/dZENcode.git
cd dZENcode
```

2. Установи зависимости:
```bash
npm install
```

3. Установи браузеры Playwright:
```bash
npx playwright install
```

## Запуск тестов
```bash
# Запустить все тесты
npx playwright test

# Запустить конкретный файл
npx playwright test tests/example.spec.js

# Запустить с видимым браузером
npx playwright test --headed

# Запустить в debug режиме
npx playwright test --debug

# Посмотреть отчёт после запуска
npx playwright show-report
```

## Структура проекта
```
dZENcode/
├── tests/               # Тестовые сценарии
│   └── example.spec.js
├── playwright.config.js # Конфигурация Playwright
├── package.json         # Зависимости проекта
├── package-lock.json
└── README.md
```

## Покрытие тестами

- ✅ Переход на сайт: https://rahulshettyacademy.com/seleniumPractise/#/
- ✅ Поиск товаров по строке "ro"
- ✅ Изменение количества товара Carrot через input (установлено 5)
- ✅ Изменение количества товара Mushroom через кнопку увеличения (установлено 3)
- ✅ Добавление товаров Carrot и Mushroom в корзину
- ✅ Открытие корзины и просмотр списка товаров
- ✅ Удаление товара Carrot из корзины

## Contributing

1. Создай ветку: `git checkout -b feature/new-test`
2. Напиши тесты
3. Проверь что все проходят: `npx playwright test`
4. Закоммить: `git commit -m "Add new test"`
5. Запушь: `git push origin feature/new-test`
6. Создай Pull Request

## Полезные ссылки

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
