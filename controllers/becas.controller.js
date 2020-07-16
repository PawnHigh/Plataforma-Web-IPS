const becCtrl = {}
const Becname = require('../models/becdata')

becCtrl.getBec = async(req,res) => {
    const Beca = await Becname.find()
    res.json(Beca)
}

module.exports = becCtrl

