import "https://deno.land/std@0.160.0/dotenv/load.ts"

export const DISCORD_TOKEN = Deno.env.get("DISCORD_TOKEN") as string

export const TEST_ID = BigInt("0") // Oliver: "228262516470448128"

export const LORD_ID = BigInt("344481159767392256")

export const TARGET_ID = BigInt("611230736586113042")

export const TEST_ODDS = 1

export const LORD_ODDS = 0.1

export const TARGET_ODDS = 0.1

export const ODDS = 0.03

export const BANNED_CHANNELS = [BigInt("1016998893331943455")]