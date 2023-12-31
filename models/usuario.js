const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_HOST);

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  email: { type: String },
  nome : { type: String },
  senha: { type: String },
  token: { type: String },
  nrsec: { type: String }
});

const usuarioModel = mongoose.model('usuarios', usuarioSchema);

module.exports = { usuarioModel };