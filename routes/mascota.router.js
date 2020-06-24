console.log("cargo mascota.route");
//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const mascotaCtrl = require('./../controllers/mascota.controller');

// definiendo rutas
router.get('/', mascotaCtrl.getMascotas);
router.post('/', mascotaCtrl.createMascota);
router.get('/:id', mascotaCtrl.getMascota);
router.put('/:id', mascotaCtrl.editMascota);
router.delete('/:id', mascotaCtrl.deleteMascota);

//exportacion del modulo de rutas
module.exports = router;