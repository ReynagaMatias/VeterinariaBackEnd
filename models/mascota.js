const mongoose = require('mongoose');
const { Schema } = mongoose;

const MascotaSchema = new Schema({
    nombre: { type: String, required: true },
    raza: { type: String, required: true },
    sexo: { type: String, required: true },
    edad: { type: Number, required: true },
    esterilizado: { type: String, required: true },
    fechaNacimiento: { type: Date, required: false },
})


module.exports = mongoose.model('Mascota', MascotaSchema);