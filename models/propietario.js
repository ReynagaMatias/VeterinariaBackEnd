const mongoose = require('mongoose');
const usuario = require('./usuario');
const { Schema } = mongoose;

const noticiaSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    domicilio: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: String, required: true },
    usuario: { type: Schema.Types.ObjectId, ref: usuario },
})

module.exports = mongoose.model('Propietario', noticiaSchema);