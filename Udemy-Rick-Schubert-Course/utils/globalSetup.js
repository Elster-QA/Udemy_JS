import * as dotenv from 'dotenv'//Зависимость для работы с .env файлоМ. В файле хранятся креды. Зависимость передает данные из .env в process.env., а process.env. передает их уже в тест.

export default () => {
    dotenv.config()//Вызов зависимости 
}
