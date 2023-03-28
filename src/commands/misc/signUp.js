const {Client, Interaction } = require('discord.js')
const {ws} = require('./../../events/ready/02websocketRTC')

module.exports = {
    name: 'sign-up',
    description: 'Creates an account for Super Based Ball Evolved',
  
    callback: async (client, interaction) => {
      await interaction.deferReply();
  
      const reply = await interaction.fetchReply();
  
      const ping = reply.createdTimestamp - interaction.createdTimestamp;
  
      interaction.editReply(
        `Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`
      );
    },
  };