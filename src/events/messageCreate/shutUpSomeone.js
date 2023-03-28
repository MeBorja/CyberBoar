const { Client, Message } = require('discord.js');
/**
 *
 * @param {Client} client
 * @param {Message} message
 */
module.exports = async (client, message) => {
    try {
        if (message.author.id == 192240441381486594) {
            message.reply(` https://media.discordapp.net/attachments/911293186398367794/1082096733615566918/DISD.gif`)
        }
    } catch (error) {
        console.log(`Error while trying saving query ${error}`);
        return
    }
};