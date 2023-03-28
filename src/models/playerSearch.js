const { Schema, model } = require('mongoose');

const playerElo = new Schema({
  
playerName:{
    type: String,
    required: true,
},
playerDiscord:{
    type: String,
    required: true,
},
win:{
    type: Number,
    default: 0
},
loose:{
    type: Number,
    default: 0
},
elo:{
    type: Number,
    default: 500
},
lvl:{
    type: Number,
    default: 0
},
all:{
    type: Boolean,
    default: true
}
});

module.exports = model('PlayerElo', playerElo);
