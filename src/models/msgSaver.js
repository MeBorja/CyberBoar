const { Schema, model } = require('mongoose');

const msgSchema = new Schema({
    username: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  guildId: {
    type: String,
    required: true,
  },
  channelId: {
    type: String,
    required: true,
  },
  discriminator: {
    type: String,
    required: true,
  },
  msgContent: {
    type: String,
  },
  createdTimestamp: {
    type: Number,
    required: true
  }

});

module.exports = model('msgSaver', msgSchema);
