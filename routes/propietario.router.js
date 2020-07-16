//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const propietarioCtrl = require('./../controllers/propietario.controller');

// definiendo rutas
router.get('/', propietarioCtrl.getPropietarios);
router.post('/', propietarioCtrl.createPropietario);
router.get('/:id',propietarioCtrl.getPropietario);
router.put('/:id',propietarioCtrl.editPropietario);
router.delete('/:id',propietarioCtrl.deletePropietario);


//exportacion del modulo de rutas
module.exports = router;