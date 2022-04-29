const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello <:peepoRose:968783999566762004>")
    }
})

const welcomeChannelId = "969178503780122664"

client.on("guildMemberAdd", async (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to Mykecord! <:xqcL:968787723433422848>`)
})

client.login(process.env.TOKEN)