const Propietario = require('../models/propietario');

const propietarioCtrl = {}

propietarioCtrl.getPropietarios = async(req, res) => {
    propietarios = await Propietario.find().populate("usuario");
    res.json(propietarios);
}

propietarioCtrl.createPropietario = async(req, res) => {
    const propietario = new Propietario(req.body);
    await propietario.save();
    res.json({
        'status': 'Propietario saved'
    });
}

propietarioCtrl.editPropietario = async(req, res) => {
    const vPropietario = new Propietario(req.body);

    await Propietario.findByIdAndUpdate(req.params.id, { $set: vPropietario }, { new: true });
    res.json({
        'status': 'Propietario updated'
    })
}

propietarioCtrl.getPropietario = async(req, res) => {
    const propietario = await Propietario.findById(req.params.id).populate("usuario");
    res.json(propietario);
}

propietarioCtrl.deletePropietario = async(req, res) => {
    await Propietario.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Propietario removed'
    })
}
module.exports = propietarioCtrl;