const mejCtrl = {}
const Mejname = require('../models/mejdata')

mejCtrl.getMej = async(req,res) => {
    const Mejores = await Mejname.find()
    res.json(Mejores)
}

module.exports = mejCtrl
