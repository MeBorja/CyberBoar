require('dotenv').config()
const { Client, IntentsBitField, GuildBan, PermissionFlagsBits, ApplicationCommandOptionType, EmbedBuilder, ActivityType  } =require('discord.js');

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://DiscordBot:${process.env.MONGO_PASS}@superbasedballdb.sdfo5br.mongodb.net/?retryWrites=true&w=majority`;
// const Mongoclient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// Mongoclient.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("mongodb is connected");
//   // perform actions on the collection object
//   client.close();
// });
//Permisions
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildModeration,
    ]
})
//Bot is Online
 
let statuses = [{
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=ki0Hkqwz9kM',
    name: 'K'
},
{
    type: ActivityType.Listening,
    url: 'https://www.youtube.com/watch?v=ki0Hkqwz9kM',
    name: 'Y'

},
{
    type: ActivityType.Playing,
    url: 'https://www.youtube.com/watch?v=ki0Hkqwz9kM',
    name: 'S'
},
{
    type: ActivityType.Watching,
    url: 'https://www.youtube.com/watch?v=ki0Hkqwz9kM',
    name: 'NOW'
}]

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online!!!`);

    //Custom statuses
    // let mainNumb = 0
    // setInterval(() => {
    //     if (mainNumb == 4) {
    //         mainNumb = 0
    //     }
    //     client.user.setActivity(statuses[mainNumb])
    //     mainNumb = mainNumb +1
    // }, 6000);

    // client.user.setActivity({
    //     type: ActivityType.Streaming,
    //     name: 'Kreft',
    //     url: 'https://www.youtube.com/watch?v=GtL1huin9EE'

    // })
})

//Slash commands
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return
    };
    if (interaction.commandName === 'hey') {
        interaction.reply('Hello there :)')
    }
    if (interaction.commandName === 'ping') {
        interaction.reply('Pong!')
    }
    if (interaction.commandName === 'add') {
        const numb1 = interaction.options.get('first-number').value
        const numb2 = interaction.options.get('second-number').value
        interaction.reply(`${parseInt(numb1) + parseInt(numb2)}!!!`)
    }
    if (interaction.commandName === 'embed') {
        const embed = new EmbedBuilder()
                .setTitle('Embed Title')
                .setDescription('This is an embed description!')
                .setColor('Random')
                .addFields({ 
                    name: 'Field title', 
                    value: 'random shit', 
                    inline: true}, {
                        name: '2nd field title',
                        value: 'Random',
                        inline: true
                    })
        interaction.reply({ embeds: [embed] })
    }

})
//give/remove role button
client.on('messageCreate', (msg) => {
    console.log(msg.content,'written by', msg.author.username ,msg.author.discriminator); 
    if (msg.author.bot) {
        return
    }
    if (msg.content === 'Hello') {
        msg.reply('Hello')

    }
    if (msg.author.id === '145275280183918593') {
        msg.reply(`Pawel, ikke snakk...`)
        msg.reply(`pls`)
    }
})
client.on('interactionCreate', async (interaction) => {
    try {
      if (!interaction.isButton()) return;
      await interaction.deferReply({ ephemeral: true });
  
      const role = interaction.guild.roles.cache.get(interaction.customId);
      if (!role) {
        interaction.editReply({
          content: "I couldn't find that role",
        });
        return;
      }
  
      const hasRole = interaction.member.roles.cache.has(role.id);
  
      if (hasRole) {
        await interaction.member.roles.remove(role);
        await interaction.editReply(`The role ${role} has been removed.`);
        return;
      }
  
      await interaction.member.roles.add(role);
      await interaction.editReply(`The role ${role} has been added.`);
    } catch (error) {
      console.log(error);
    }
  });

// Option commands   
//   client.on('interactionCreate', (interaction) => {
//     if (!interaction.isChatInputCommand()) return;
  
//     if (interaction.commandName === 'add') {
//       const num1 = interaction.options.get('first-number').value;
//       const num2 = interaction.options.get('second-number').value;
  
//       interaction.reply(`The sum is ${num1 + num2}`);
//     }
//   });


// Launche Bot
client.login(process.env.TOKEN)

