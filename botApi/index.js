const TelegramBot = require('node-telegram-bot-api');

const token = '6441262808:AAFb5t8xZmowSIWS24p9J_S-ZoWxPpJWCR0';
const webUrl = 'https://master--tg-bot-web1.netlify.app/'

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;


  if (msg.text === '/start') {
    bot.sendMessage(chatId, msg.from.language_code === "ru" ? 'Наш сайт по задиаку' : 'Our site about zodiacs', {
        reply_markup: {
            inline_keyboard: [
                [{text: "Сайт", web_app: { url: webUrl}}]
            ],
        }
    });
  }
});