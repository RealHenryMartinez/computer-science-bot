import { Client, Guild, GuildManager, GatewayIntentBits, User, GuildMemberManager, GuildMember, Collection } from "discord.js";
const client = new Client({
 intents: [
   GatewayIntentBits.Guilds,
   GatewayIntentBits.GuildMessages,
   GatewayIntentBits.GuildMembers,
 ],
});
import dotenv from "dotenv"
dotenv.config() // Add only when developing, configure later for production
const TOKEN = process.env.TOKEN;
client.on("ready", () => {
 console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
 if (msg.content === "ping") {
   msg.reply("pong");
 }
})

client.login(TOKEN)