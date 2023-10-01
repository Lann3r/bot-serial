const TelegramApi = require('node-telegram-bot-api')

const token = '6443841816:AAFsVskqv3bU_jeZqpXpUiNGWngI64U8Cv4'
const bot = new TelegramApi(token, { polling: true })
//Подсказки для команд
bot.setMyCommands([
    { command: '/start', description: 'Начало' }
])

//Кнопки
const Buttons = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '1 серия', callback_data: 1 }, { text: '2 серия', callback_data: 2 }, { text: '3 серия', callback_data: 3 }, { text: '4 серия', callback_data: 4 }],
            [{ text: '5 серия', callback_data: 5 }, { text: '6 серия', callback_data: 6 }, { text: '7 серия', callback_data: 7 }, { text: '8 серия', callback_data: 8 }],
            [{ text: 'Подарок 🎁', callback_data: 'gift' }]
        ]

    })
}
const playerBtn = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Выбрать другую серию', callback_data: 'menu' }]
        ]
    })
}
const RefBtn = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Получить бесплатную карту🎁', url: 'https://my.saleads.pro/s/vela', callback_data: 'Ref' }]
        ]
    })
}



bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === '/start') {
        await bot.sendPhoto(chatId, 'https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/bb9dd071-b96b-4c2b-a5e2-ae653248644b/1920x')
        await bot.sendMessage(chatId, 'Добро пожаловать на бот Filmer! Выберите серию:', Buttons);


    } else {
        await bot.sendMessage(chatId, 'Ваша команда неверна!');
    }


})

// callback кнопки
bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    if (data == 1) {
        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/thj7/iJQgJqryJ')
        await bot.sendMessage(chatId, '1 серия☝', playerBtn)
    }
    if (data == 2) {
        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/Dym7/xjZ6NG9LW')
        await bot.sendMessage(chatId, '2 серия☝', playerBtn)

    }
    if (data == 3) {
        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/7o2o/z9Rvx8QpS')
        await bot.sendMessage(chatId, '3 серия☝', playerBtn)
        await this.wait();


    }
    if (data == 4) {
        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/zwrD/sF8r9xfCH')
        await bot.sendMessage(chatId, '4 серия☝', playerBtn)

    }
    if (data == 5) {
        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/mvu7/cTpLYtEJh')
        await bot.sendMessage(chatId, '5 серия☝', playerBtn)
    }
    if (data == 6) {

        await bot.sendMessage(chatId, 'Серия в процессе добавления...', playerBtn)
    }
    if (data == 7) {

        await bot.sendMessage(chatId, 'Серия в процессе добавления...', playerBtn)
    }
    if (data == 8) {

        await bot.sendMessage(chatId, 'Серия в процессе добавления...', playerBtn)
    }
    if (data === 'gift') {
        await bot.sendPhoto(chatId, 'Photo/7433.jpg')
        await bot.sendMessage(chatId, 'Получи от нас дебетовую карту и стикеры ❤️ для твоего телефона совершенно бесплатно!😱 \n - Вечное бесплатное обслуживание \n - Кэшбэк до 100 % в барабане, 5 % на категории на выбор и 1 % на всё \n - Платежи и переводы без комиссии'
          , RefBtn)
    }
    // bot.sendMessage(chatId, `Ты нажал кнопку ${data}`)
    if (data === 'menu') {
        await bot.sendMessage(chatId, 'Выберите серию', Buttons)
    }







})

