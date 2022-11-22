// NOT USED

const TelegramApi = require("node-telegram-bot-api");

const token = "5792008606:AAE6Acx7xr1DIwB2LOYigRRE9as_0KzTbto";

const bot = new TelegramApi(token, { polling: true });
let botTodoList = [];

bot.setMyCommands([
  { command: "/start", description: "Приветствие" },
  { command: "/showtodo", description: "Список задач" },
  { command: "/deletelast", description: "Удалить последнюю задачу" },
]);

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  if (text === "/start") {
    bot.sendMessage(
      chatId,
      "Привет, отправь мне тудушку и я добавлю ее в твой тудулист"
    );
  }
  if (text === "/showtodo") {
    botTodoList.length
      ? bot.sendMessage(
          chatId,
          `Вот список добавленных задач ${JSON.stringify(botTodoList)}`
        )
      : bot.sendMessage(chatId, "Нет задач");

    console.log(msg);
  }
  if (text === "/deletelast") {
    botTodoList.length
      ? bot.sendMessage(
          chatId,
          `Задача ${
            botTodoList[botTodoList.length - 1].description
          } была удалена`
        )
      : bot.sendMessage(chatId, "Нечего удалять");
    botTodoList.pop();
    console.log(botTodoList);
  } else if (text !== "/start" && text !== "/showtodo") {
    let textMessage = {
      id: Date.now(),
      description: text,
      important: false,
      isWork: false,
      done: false,
    };
    botTodoList.push(textMessage);
    console.log(botTodoList);
    bot.sendMessage(
      chatId,
      `Сообщение '${text}' было добавлено в список задач`
    );
  }
});
// NOT USED
