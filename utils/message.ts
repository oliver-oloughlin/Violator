import { Bot, Message, sendMessage } from "../imports.ts"
import { LORD_ID, LORD_ODDS, TARGET_ID, TARGET_ODDS, ODDS, TEST_ID, TEST_ODDS } from "./constants.ts"

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

export async function send(bot: Bot, triggerMsg: Message) {
  const to = triggerMsg.authorId
  const { odds, type } = getMessageSettings(to)
  const doSend = Math.random() <= odds
  if (!doSend) return

  await sendMessage(bot, triggerMsg.channelId, {
    content: getMessage(type, `<@${to}>`)
  })
}

function getMessageSettings(id: BigInt): MessageSettings {
  switch (id) {
    case TEST_ID: return {
      odds: TEST_ODDS,
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
      `${name} gets 5 stars on my admin rating!`
    ],
    insult: [
      `If I saw you on the same sidewalk as me ${name} I would literally cross the street faster 
      than your dad left you.`,
      `A fuckin sewage pipe has more charisma than you ${name}!`,
      `Suck my shitty D ${name}!`,
      `Yo ${name}, who tf asked?!`,
      `Get Gaped ${name}`,
      `Oh oh ${name}, Downey alert!`,
      `${name} <-- Actual autistard in action right here`,
      `${name} it's probably better if you stick to listening instead of talking my guy`,
      `kys ${name}`,
      `Please abort yourself ${name}`,
      `${name} would run from a 1v1 with a fuckin ant`,
      `${name} got them inward biceps`,
      `${name}... now that's one dibbed looking motherfucker`,
      `Hey ${name}, your mom got a stanker, but at least she move it good`,
      `${name} buddy, jump off a bridge real quick will ya?`,
      `God created all beings, except ${name}, that is one unholy uggers lookin ass`,
      `Yeah yeah ${name}, we get it, you have brain diarrhea`
    ],
    violation: [
      `${name} you have about as much of a hairline as you got bitches!`,
      `Man so dibbed that an Oompa Loompa be lookin sexy af next to ${name}!`,
      `A bird that swipes right on Shrek and his retarded donkey would still swipe left on ${name}`,
      `Eric Cartman lookin ass --> ${name}`,
      `${name}'s mom gotta have a wildly slippery cooch to deliver that monstrocity!`,
      `Aaaand parents of the year award goes to ${name}'s mom and dad for NOT choosing abortion! (My god, I certainly would)`,
      `${name} kys, right now, no joke`,
      `${name} is so short his micropenis is longer than his height`,
      `Imagine being ${name}, waking up every day, and deciding to keep living after looking in the mirror?!?`,
      `Not even pedophiles could stand looking at ${name} when he was a kid`,
      `Normal peen: 8====D, ${name}'s peen: 8=D`,
      `${name} lookin like the slowest wank ever`,
      `${name} oh shit, I didn't know The Hunchback was a member of this server!`
    ]
  }

  const strings = messages[type]
  const msg = strings[Math.floor(Math.random() * strings.length)]
  return msg
}