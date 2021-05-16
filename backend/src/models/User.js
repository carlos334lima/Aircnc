//Abstração do banco de dados

const { Schema, model } = require("mongoose");

const UserSchema = new Schema({

  email: String

})

module.exports = model('Users', UserSchema); 