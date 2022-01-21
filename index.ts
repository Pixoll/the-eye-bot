import { Client, User } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    intents: ['GUILD_PRESENCES']
});

client.on('ready', () => console.log('The client is now online.'));

const pixelId = '802267523058761759';
const pixollId = '667937325002784768';
let pixoll: User;

client.on('presenceUpdate', async (old, { userId, status }) => {
    if (userId !== pixelId || old?.status === status) return;

    try {
        pixoll ??= await client.users.fetch(pixollId);
        await pixoll.send(`<@802267523058761759> just went \`${status}\`.`);
    } catch (err) {
        console.error(err);
        console.log(`Pixel just went "${status}".`);
    }
});

client.login();
