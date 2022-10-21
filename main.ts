import { createBot, startBot, Intents, addReaction } from "https://deno.land/x/discordeno@17.0.0/mod.ts"
import { send } from "./utils/message.ts"
import "https://deno.land/std@0.160.0/dotenv/load.ts"
import { CHANNEL_ID, LORD_ID } from "./utils/constants.ts"

const token = Deno.env.get("DISCORD_TOKEN")
if (!token) throw Error("Token not initilized")

const bot = createBot({
  token,
  intents: Intents.GuildMessages,
  events: {
    ready: () => console.log("Successfully connected to gateway"),
    messageCreate: (bot, msg) => {
      if (msg.isFromBot) return
      if (msg.authorId === LORD_ID) addReaction(bot, CHANNEL_ID, msg.id, ":eirik:")
      setTimeout(() => {
        const member = msg.member!
        send(bot, member)
      }, 5_000 + Math.random() * 10_000)
    }
  }
})

await startBot(bot)