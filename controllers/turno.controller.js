const Turno = require('../models/turno');

const turnoCtrl = {}
turnoCtrl.getTurnos = async(req, res) => {
    turnos = await Turno.find().populate("mascota");
    res.json(turnos);
}

turnoCtrl.createTurno = async(req, res) => {
    const turno = new Turno(req.body);
    await turno.save();
    res.json({
        'status': 'Turno saved'
    });
}

turnoCtrl.editTurno = async(req, res) => {
    const vTurno = new Turno(req.body);

    await Turno.findByIdAndUpdate(req.params.id, { $set: vTurno }, { new: true });
    res.json({
        'status': 'Turno updated'
    })
}

turnoCtrl.getTurno = async(req, res) => {
    const turno = await Turno.findById(req.params.id).populate("mascota");
    res.json(turno);
}

turnoCtrl.deleteTurno = async(req, res) => {
    await Turno.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Turno removed'
    })
}
module.exports = turnoCtrl;