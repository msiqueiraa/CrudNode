const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dataNascimento: { type: Date, required: true }
});

const MyModel = mongoose.model('Users', User);
module.exports = MyModel;
