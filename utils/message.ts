import { Bot, sendMessage, Member } from "discordeno"
import { LORD_ID, LORD_ODDS, TARGET_ID, TARGET_ODDS, ODDS, CHANNEL_ID, CREATOR_ID, CREATOR_ODDS } from "./constants.ts"

type MessageType = "praise" | "violation" | "insult"

interface Messages {
  praise: string[],
  insult: string[],
  violation: string[]
}

interface MessageSettings {
  odds: number,
  type: MessageType
}

export async function send(from: Bot, to: Member) {
  const { odds, type } = getMessageSettings(to.id)
  const doSend = Math.random() <= odds
  if (!doSend) return

  await sendMessage(from, CHANNEL_ID, {
    content: getMessage(type, `<@${to.id}>`)
  })
}

function getMessageSettings(id: BigInt): MessageSettings {
  switch (id) {
    case CREATOR_ID: return {
      odds: CREATOR_ODDS,
      type: "insult"
    }

    case LORD_ID: return {
      odds: LORD_ODDS,
      type: "praise"
    }

    case TARGET_ID: return {
      odds: TARGET_ODDS,
      type: "violation"
    }

    default: return {
      odds: ODDS,
      type: "insult"
    }
  }
}

function getMessage(type: MessageType, name: string) {
  const messages: Messages = {
    praise: [
      `I would literally lick your gapehole ${name}, my lord and saviour!`,
      `If I was your baby ${name} I would hold in my shit to be a good boy ;)`,
      `You get so many females ${name} that you be training them like COD zombies!`,
      `${name} <-- This guy right here is the only acceptable ginger in the world, respect him!`,
      `${name} gimme that weiner, gobble gobble!`,
      `Henrik will never be the man that ${name} is!`,
      `${name} gets 5 stars on my admin rating!`,
      `Notice me senpai ${name}!`
    ],
    insult: [
      `${name} yo mama so uggers she would lay with SonElias!`,
      `If I saw you on the same sidewalk as me ${name} I would literally cross the street faster 
      than your dad left you.`,
      `My nephew saw a picture of you ${name} and asked "What kind of homeless ferret is that?"`,
      `A fuckin sewage pipe has more charisma than you ${name}!`,
      `Suck my D ${name}!`,
      `Yo ${name}, who tf asked?!`,
      `Get Gaped ${name}`,
      `Oh oh ${name}, Downey alert!`,
      `${name} <-- Actual autistard in action right here`,
      `${name} it's probably better if you stick to listening instead of talking my guy`
    ],
    violation: [
      `${name} You have about as much of a hairline as you got bitches!`,
      `Man so dibbed that an Oompa Loompa be lookin sexy af next to ${name}!`,
      `A bird that swipes right on Shrek and his retarded donkey would still swipe left on ${name}`,
      `Eric Cartman lookin ass --> ${name}`,
      `${name}'s mom gotta have a wildly slippery cooch to deliver that monstrocity!`,
      `Aaaand parents of the year award goes to ${name}'s mom and dad for NOT choosing abortion! (My god, I certainly would)`
    ]
  }

  const strings = messages[type]
  const msg = strings[Math.floor(Math.random() * strings.length)]
  return msg
}