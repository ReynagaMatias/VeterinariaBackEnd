//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const turnoCtrl = require('./../controllers/turno.controller');

// definiendo rutas
router.get('/', turnoCtrl.getTurnos);
router.post('/', turnoCtrl.createTurno);
router.get('/:id', turnoCtrl.getTurno);
router.put('/:id', turnoCtrl.editTurno);
router.delete('/:id', turnoCtrl.deleteTurno);

//exportacion del modulo de rutas
module.exports = router;