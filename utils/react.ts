import { Bot, Message, addReaction } from "https://deno.land/x/discordeno@17.0.0/mod.ts";
import { LORD_ID } from "./constants.ts";

interface ReactionSettings {
  doReaction: boolean,
  reaction: string
}

export async function reactToMessage(bot: Bot, msg: Message) {
  const { doReaction, reaction } = getReactionSettings(msg.authorId)
  if (doReaction) await addReaction(bot, msg.channelId, msg.id, reaction)
}

function getReactionSettings(id: BigInt) {
  switch (id) {
    case LORD_ID: return {
      doReaction: true,
      reaction: "<:eirik:941304899751260200>"
    }

    default: return {
      doReaction: false,
      reaction: ""
    }
  }
}