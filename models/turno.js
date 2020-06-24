const mongoose = require('mongoose');
const mascota = require('./mascota');
const { Schema } = mongoose;

const TurnoSchema = new Schema({
    fecha: { type: Date, required: true },
    motivo: { type: String, required: true },
    mascota: { type: Schema.Types.ObjectId, ref: mascota },
})

module.exports = mongoose.model('Turno', TurnoSchema);