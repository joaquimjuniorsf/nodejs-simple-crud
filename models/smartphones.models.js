const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let smartphoneSchema = new Schema({
    nome: {type: String, required: true, max: 100},
    marca: {type: Number, required: true},
})

//export the model
module.exports = mongoose.model('Smartphones', smartphoneSchema);