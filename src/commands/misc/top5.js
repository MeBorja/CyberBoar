const {
    EmbedBuilder
} = require('discord.js');
const eloPlayers = require("../../models/playerSearch")



module.exports = {
    name: 'top5',
    description: 'Shows current top 5 players',

    callback: async (client, interaction) => {
        let allData = await eloPlayers.find({
            all: true
        }).sort({
            elo: -1
        })
        let top5 = []
        allData.forEach(e => {
            if (4 >= top5.length) {
                top5.push(e)
            }
        });
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Top 5')
            .setAuthor({
                name: 'SBBE',
                iconURL: 'https://cdn.discordapp.com/attachments/1073167138749173790/1088553663036924025/pisunkabana88_cyberpunk_boar_dbe52483-ddb2-4a09-b0e2-4bfb87fbc889.png',
                url: 'https://discord.gg/KchKWBSU'
            })
            .setDescription('Current Top 5 Players on SBBE')
            .setThumbnail('https://cdn.discordapp.com/attachments/1073167138749173790/1088768515131056198/SuperBasedBallTitle.png')
            .addFields({
                    name: '1.',
                    value: `**Name**: ${top5[0].playerName} **Elo**: ${top5[0].elo}`
                }, {
                    name: '2.',
                    value: `**Name**: ${top5[1].playerName} **Elo**: ${top5[1].elo}`
                }, {
                    name: '3.',
                    value: `**Name**: ${top5[2].playerName} **Elo**: ${top5[2].elo}`
                }, {
                    name: '4.',
                    value: `**Name**: ${top5[3].playerName} **Elo**: ${top5[3].elo}`
                }, {
                    name: '5.',
                    value: `**Name**: ${top5[4].playerName} **Elo**: ${top5[4].elo}`
                },

            )
            .setTimestamp()
            .setFooter({
                text: 'SBBE (TM)',
                iconURL: 'https://cdn.discordapp.com/attachments/1073167138749173790/1088553663036924025/pisunkabana88_cyberpunk_boar_dbe52483-ddb2-4a09-b0e2-4bfb87fbc889.png'
            });
        await interaction.deferReply();


        interaction.editReply({
            embeds: [exampleEmbed]
        });
    },
};