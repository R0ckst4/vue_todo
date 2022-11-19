const TelegramApi = require("node-telegram-bot-api");

const token = "5792008606:AAE6Acx7xr1DIwB2LOYigRRE9as_0KzTbto";

const bot = new TelegramApi(token, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === "/start") {
    bot.sendMessage(
      chatId,
      "Привет, отправь мне тудушку и я добавлю ее в твой тудулист"
    );
  }
});
