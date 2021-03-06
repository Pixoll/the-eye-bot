"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new discord_js_1.Client({
    intents: ['GUILD_PRESENCES']
});
client.on('ready', () => console.log('The client is now online.'));
const pixelId = '802267523058761759';
const pixollId = '667937325002784768';
let pixoll;
client.on('presenceUpdate', async (old, { userId, status }) => {
    if (userId !== pixelId || old?.status === status)
        return;
    try {
        pixoll ??= await client.users.fetch(pixollId);
        await pixoll.send(`<@802267523058761759> just went \`${status}\`.`);
    }
    catch (err) {
        console.error(err);
        console.log(`Pixel just went "${status}".`);
    }
});
client.login();
