const path = require('path'); // Модуль для работы с путями к файлам и папкам.
const dotenv = require('dotenv'); // Зависимость для работы с .env-файлом, в котором хранятся креды.

module.exports = () => {
    dotenv.config({
        path: path.resolve(__dirname, '../.env')
        // Указываем путь к .env: __dirname — папка utils,
        // ../.env — поднимаемся на уровень выше, в корень AQA-Pet-Project.
        // dotenv загружает данные из .env в process.env,
        // откуда тесты получают значения WEEK_NAME и WEEK_PASS.
    });
};