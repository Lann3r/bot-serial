const TelegramApi = require('node-telegram-bot-api')

const token = '6443841816:AAFsVskqv3bU_jeZqpXpUiNGWngI64U8Cv4'
const bot = new TelegramApi(token, { polling: true })
//Подсказки для команд
bot.setMyCommands([
    { command: '/start', description: 'Начало' }
])

//Кнопки
const checkBtn = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Проверить подписку', callback_data: 'check' }]
        ]
    })
}
const Buttons = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '1 серия', callback_data: 1 }, { text: '2 серия', callback_data: 2 }, { text: '3 серия', callback_data: 3 }, { text: '4 серия', callback_data: 4 }],
            [{ text: '5 серия', callback_data: 5 }, { text: '6 серия', callback_data: 6 }, { text: '7 серия', callback_data: 7 }, { text: '8 серия', callback_data: 8 }],
            [{ text: '9 серия', callback_data: 9 }, { text: '10 серия', callback_data: 10 }, { text: '11 серия', callback_data: 11 }, { text: '12 серия', callback_data: 12 }],
            [{ text: '13 серия', callback_data: 13 }, { text: '14 серия', callback_data: 14 }, { text: '15 серия', callback_data: 15 }, { text: '16 серия', callback_data: 16 }],
            [{ text: '17 серия', callback_data: 17 }, { text: '18 серия', callback_data: 18 }, { text: '19 серия', callback_data: 19 }, { text: '20 серия', callback_data: 20 }],
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
            [{ text: 'Получить бесплатную карту🎁', url: 'https://2go.pro/f4ro', callback_data: 'Ref' }]
        ]
    })
}
const StickerBtn = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Заказать стикер бесплатно👈', url: 'https://2go.pro/v2tF', callback_data: 'sticker' }]
        ]
    })
}
const CardBtn = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: 'Заказать карту бесплатно👈', url: 'https://2go.pro/f4ro', callback_data: 'Card' }]
        ]
    })
}


bot.on('message', async msg => {
    const text = msg.text;
    if (text === '/start') {
        const chatId = msg.chat.id
        let pass = await bot.getChatMember('@kotogramfun', chatId)
        console.log(pass.status);
        if (pass.status === 'left' || pass.status === 'creator') {
            await bot.sendMessage(chatId, 'Чтобы посмотреть серии, нужно подписаться на наш самый милый канал про котиков \n https://t.me/+DNONd2h01Ic2OTIy', checkBtn)
            return
        } else if (pass.status === 'member') {
            await bot.sendMessage(chatId, 'Вы подписаны!')
            await bot.sendPhoto(chatId, 'https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/bb9dd071-b96b-4c2b-a5e2-ae653248644b/1920x')
            await bot.sendMessage(chatId, 'Добро пожаловать на бот Filmer! Выберите серию:', Buttons);

        }
    }
})

// callback кнопки




bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    let pass = await bot.getChatMember('@kotogramfun', chatId)
    if (data == 'check') {
        if (pass.status === 'member' || pass.status === 'creator') {
            bot.sendMessage(chatId, 'Вы подписаны!')
            await bot.sendPhoto(chatId, 'https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/bb9dd071-b96b-4c2b-a5e2-ae653248644b/1920x')
            await bot.sendMessage(chatId, 'Добро пожаловать на бот Filmer! Выберите серию:', Buttons)
        } else if (pass.status === 'left' ) {
            bot.answerCallbackQuery(msg.id, "Вы не подписаны")
        }
    }
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
        await bot.sendMessage(chatId, '❤️Спасибо что пользуетесь нашим ботом! \n хотим подарить вам бесплатный стикер с милым котиком🐱 на ваш телефон для оплаты покупок!❤️' , StickerBtn)
        
        

    }
    if (data == 4) {
        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/zwrD/sF8r9xfCH')
        await bot.sendMessage(chatId, '4 серия☝', playerBtn)

    }
    if (data == 5) {
        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/mvu7/cTpLYtEJh')
        await bot.sendMessage(chatId, '5 серия☝', playerBtn)
        await bot.sendMessage(chatId, '❤️Также хотим подарить вам бесплатную дебетовую карту с большим кэшбеком!❤️' , CardBtn)
    }
    if (data == 6) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/Yutv/BKCkhD9S9')
        await bot.sendMessage(chatId, '6 серия☝', playerBtn)
    }
    if (data == 7) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/KRDu/D8bn2brEM')
        await bot.sendMessage(chatId, '7 серия☝', playerBtn)
    }
    if (data == 8) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/VuP8/YvdkPDEtY')
        await bot.sendMessage(chatId, '8 серия☝', playerBtn)
        await bot.sendMessage(chatId, '❤️Спасибо что пользуетесь нашим ботом, \n хотим подарить вам бесплатный стикер с милым котиком🐱 на ваш телефон для оплаты покупок!❤️' , StickerBtn)
    }
    if (data == 9) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/fS47/2H8BsKoh1')
        await bot.sendMessage(chatId, '9 серия☝', playerBtn)
    }
    if (data == 10) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/XQ8v/DDFqi8kR1')
        await bot.sendMessage(chatId, '10 серия☝', playerBtn)
    }
    if (data == 11) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/2rEV/3UcTBKSJo')
        await bot.sendMessage(chatId, '11 серия☝', playerBtn)
        await bot.sendMessage(chatId, '❤️Спасибо что пользуетесь нашим ботом! \n Хотим подарить вам бесплатную дебетовую карту с большим кэшбеком!❤️' , CardBtn)
    }
    if (data == 12) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/51BC/1VU9jdPcT')
        await bot.sendMessage(chatId, '12 серия☝', playerBtn)
    }
    if (data == 13) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/7Y3E/WWDnc69Zm')
        await bot.sendMessage(chatId, '13 серия☝', playerBtn)
        await bot.sendMessage(chatId, '❤️Спасибо что пользуетесь нашим ботом! \n Хотим подарить вам бесплатную дебетовую карту с большим кэшбеком!❤️' , CardBtn)
    }
    if (data == 14) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/76cH/SXmzmgtrr')
        await bot.sendMessage(chatId, '14 серия☝', playerBtn)
    }
    if (data == 15) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/vhqN/X8r1wd6rZ')
        await bot.sendMessage(chatId, '15 серия☝', playerBtn)
        await bot.sendMessage(chatId, '❤️Спасибо что пользуетесь нашим ботом! \n Хотим подарить вам бесплатную дебетовую карту с большим кэшбеком!❤️' , CardBtn)
    }
    if (data == 16) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/9YWr/SCMD6X69c')
        await bot.sendMessage(chatId, '16 серия☝', playerBtn)
    }
    if (data == 17) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/aBEf/Y5MLca6dm')
        await bot.sendMessage(chatId, '17 серия☝', playerBtn)
    }
    if (data == 18) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/E7Tq/EZg7FXFQH')
        await bot.sendMessage(chatId, '18 серия☝', playerBtn)
        await bot.sendMessage(chatId, '❤️Хотим подарить вам бесплатную дебетовую карту с большим кэшбеком!❤️' , CardBtn)

    }
    if (data == 19) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/UGP2/dxGoqqpYm')
        await bot.sendMessage(chatId, '19 серия☝', playerBtn)
    }
    if (data == 20) {

        await bot.sendMessage(chatId, 'https://cloud.mail.ru/public/esix/7CZnEKqmx')
        await bot.sendMessage(chatId, '20 серия☝', playerBtn)
        await bot.sendMessage(chatId, '❤️Хотим подарить вам бесплатный стикер с милым котиком🐱 на ваш телефон для оплаты покупок!❤️' , StickerBtn)
        
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

