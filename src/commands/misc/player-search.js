const {
    EmbedBuilder,
    ApplicationCommandOptionType,
} = require('discord.js');
const eloPlayers = require("../../models/playerSearch")

module.exports = {
    name: 'player-search',
    description: 'Searches for a spesific player in SBBE',
    options: [{
        name: 'target-user',
        description: 'The user you want to search',
        type: ApplicationCommandOptionType.String,
        required: true,
    }],

    callback: async (client, interaction) => {
        await interaction.deferReply();
        const target = interaction.options.get('target-user').value;
        let playerSats = await eloPlayers.findOne({
            playerName: target
        })
        if (playerSats) { 
        let wl = playerSats.win / playerSats.loose
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Search for a player',
            author: {
                name: 'SBBE',
                icon_url: 'https://i.imgur.com/AfFp7pu.png',
            },
            description: 'Searches for a player in SBBE and shows player stats',
            thumbnail: {
                url: 'https://i.imgur.com/AfFp7pu.png',
            },
            fields: [{
                    name: '\u200b',
                    value: '\u200b',
                    inline: false,
                },
                {
                    name: `**Name**: `,
                    value: `${playerSats.playerName}`,
                },
                {
                    name: '**Player Discord**:',
                    value: `${playerSats.playerDiscord}`,
                },
                {
                    name: '**lvl**',
                    value: `${playerSats.lvl}`,
                    inline: true,
                },
                {
                    name: '**Elo**',
                    value: `${playerSats.elo}`,
                    inline: true,
                },
                {
                    name: '**W/L**',
                    value: `${wl}`,
                    inline: true,
                },
                {
                    name: '**Wins**',
                    value: `${playerSats.win}`,
                    inline: true,
                },
                {
                    name: '**Loses**',
                    value: `${playerSats.loose}`,
                    inline: true,
                },
            ],
            timestamp: new Date().toISOString(),
            footer: {
                text: 'SBBE (TM)',
                icon_url: 'https://i.imgur.com/AfFp7pu.png',
            },
        };

        interaction.editReply({
            embeds: [exampleEmbed]
        });} else { interaction.editReply("That user does not exist >:(")}
    } 
};