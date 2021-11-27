// eslint-disable-next-line no-unused-vars
const { Client, TextChannel } = require('discord.js')

require('dotenv').config()

const client = new Client({
    intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_PRESENCES'],
    partials: ['GUILD_MEMBER'],
    failIfNotExists: false
})

client.on('ready', () => console.log(client.user.tag, 'is online!'))

const pixelId = '802267523058761759'
const pixollId = '667937325002784768'
const ownerChanId = '899780764219113534'

/** @type {TextChannel} */
let channel

client.on('presenceUpdate', async (_, { user, userId, status }) => {
    if (userId !== pixelId) return

    channel ??= await client.channels.fetch(ownerChanId)

    const string = `<@${pixollId}>, ${user.toString()} just went \`${status}\`!`
    await channel.send(string)
})

client.login()