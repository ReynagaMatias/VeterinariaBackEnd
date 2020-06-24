const Mascota = require('../models/mascota');

const mascotaCtrl = {}

mascotaCtrl.getMascotas = async(req, res) => {
    mascotas = await Mascota.find();
    res.json(mascotas);
}


mascotaCtrl.createMascota = async(req, res) => {
    const mascota = new Mascota(req.body);
    //const sector = await Sector.findById(req.params.id);
    //const puntoInteres.sector = sector;
    await mascota.save();
    res.json({
        'status': 'Mascota saved'
    });
}

mascotaCtrl.getMascota = async(req, res) => {
    const mascota = await Mascota.findById(req.params.id);
    res.json(Mascota);
}

mascotaCtrl.editMascota = async(req, res) => {
    /*const sector = {
        nombre: req.body.nombre,
        mail: req.body.email,
        dependencia: req.body.dependencia,
    };*/
    const vmascota = new Mascota(req.body);
    await Mascota.findByIdAndUpdate(req.params.id, { $set: vmascota }, { new: true });
    res.json({
        'status': 'Mascota updated'
    })
}
mascotaCtrl.deleteMascota = async(req, res) => {
    await Mascota.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Mascota removed'
    })
}
module.exports = mascotaCtrl;