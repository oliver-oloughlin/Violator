import { createBot, startBot, Intents } from "./imports.ts"
import { send } from "./utils/message.ts"
import { reactToMessage } from "./utils/react.ts"
import { DISCORD_TOKEN } from "./utils/constants.ts"

const bot = createBot({
  token: DISCORD_TOKEN,
  intents: Intents.GuildMessages,
  events: {
    ready: () => console.log("Successfully connected to gateway"),
    
    messageCreate: (bot, msg) => {
      if (msg.isFromBot) return
      reactToMessage(bot, msg)
      setTimeout(() => {
        send(bot, msg)
      }, 2_500)
    }
  }
})

await startBot(bot)