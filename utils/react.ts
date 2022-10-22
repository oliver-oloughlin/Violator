import { Bot, Message, addReaction } from "https://deno.land/x/discordeno@17.0.0/mod.ts"
import { LORD_ID, TEST_ID } from "./constants.ts"

export async function reactToMessage(bot: Bot, msg: Message) {
  const { doReaction, reaction } = getReactionSettings(msg.authorId)
  if (doReaction) await addReaction(bot, msg.channelId, msg.id, reaction)
}

interface ReactionSettings {
  doReaction: boolean,
  reaction: string
}

const reactions = {
  eirik: "<:eirik:941304899751260200>",
  test: "<:oliver:983294690109579304>"
}

function getReactionSettings(id: BigInt): ReactionSettings {
  switch (id) {
    case LORD_ID: return {
      doReaction: true,
      reaction: reactions.eirik
    }

    case TEST_ID: return {
      doReaction: true,
      reaction: reactions.test
    }

    default: return {
      doReaction: false,
      reaction: ""
    }
  }
}