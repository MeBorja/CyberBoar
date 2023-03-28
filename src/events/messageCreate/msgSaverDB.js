const {
    Client,
    Message
} = require('discord.js');
const msgContentDB = require('../../models/msgSaver');


/**
 *
 * @param {} client
 * @param {Message} message
 */
module.exports = async (client, message) => {
    if (message.author.bot) return;
    const query = new msgContentDB({
        username: message.author.username,
        userId: message.author.id,
        guildId: message.guild.id,
        channelId: message.channelId,
        discriminator: message.author.discriminator,
        msgContent: message.content,
        createdTimestamp: message.createdTimestamp
    })

    try {
        await query.save().catch((e) => {
            console.log(`Error saving query ${e}`);
            return;
          });
    } catch (error) {
        console.log(`Error while trying saving query ${error}`);
        return
    }

};