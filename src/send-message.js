require('dotenv').config();
const {
  Client,
  IntentsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require('discord.js');


const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const roles = [
  {
    id: '1080105825374306344',
    label: 'Lord Of Cum',
  },
  {
    id: '1080105892197965874',
    label: 'Shitter Heir',
  },
  {
    id: '1080106277730000898',
    label: 'Piss Priest',
  },
];


client.on('ready', async (c) => {

  try {
    const channel = await client.channels.cache.get('839202719670730754');
    if (!channel) return;
    await channel.send({
      content: '_ _'
    })
    console.log('msg sent');
  } catch (error) {
    console.log(error);
  }
    // try {
    //   const channel = await client.channels.cache.get('839202719670730754');
    //   if (!channel) return;
  
    //   const row = new ActionRowBuilder();
  
    //   roles.forEach((role) => {
    //     row.components.push(
    //       new ButtonBuilder()
    //         .setCustomId(role.id)
    //         .setLabel(role.label)
    //         .setStyle(ButtonStyle.Primary)
    //     );
    //   });
  
    //   await channel.send({
    //     content: 'Claim or remove a role below.',
    //     components: [row],
    //   });
    //   process.exit();
    // } catch (error) {
    //   console.log(error);
    // }
  });


client.login(process.env.TOKEN);