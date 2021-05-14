//Abstração do banco de dados

const { Schema, model } = require("mongoose");

const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //Criar colunas de datas(Primeira data de criação, ultima atualização)
  }
);

module.exports = model("Dev", DevSchema);
