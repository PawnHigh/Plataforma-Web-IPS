const proCtrl = {}
const Proname = require('../models/prodata')

proCtrl.getPro = async(req,res) => {
    const Programa = await Proname.find()
    res.json(Programa)
}

module.exports = proCtrl

