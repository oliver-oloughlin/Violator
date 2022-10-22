import { createBot, startBot, Intents } from "https://deno.land/x/discordeno@17.0.0/mod.ts"
import { send } from "./utils/message.ts"
import { reactToMessage } from "./utils/react.ts"
import "https://deno.land/std@0.160.0/dotenv/load.ts"

const token = Deno.env.get("DISCORD_TOKEN")
if (!token) throw Error("Token not initilized")

const bot = createBot({
  token,
  intents: Intents.GuildMessages,
  events: {
    ready: () => console.log("Successfully connected to gateway"),
    
    messageCreate: (bot, msg) => {
      if (msg.isFromBot) return
      reactToMessage(bot, msg)
      setTimeout(() => {
        send(bot, msg)
      }, 3_000 + Math.random() * 2_000)
    }
  }
})

await startBot(bot)