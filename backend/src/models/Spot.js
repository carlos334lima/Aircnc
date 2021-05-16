//Abstração do banco de dados

const { Schema, model } = require("mongoose");

const SpotSchema = new Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: Schema.Types.ObjectId,        //Salvando o ID do usuário
    ref: 'User'                         //Referência de qual modo é essa operação
  },
});

module.exports = model("Spot", SpotSchema);
