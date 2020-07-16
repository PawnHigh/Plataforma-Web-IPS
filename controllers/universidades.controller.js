const uniCtrl = {}
const Uname = require('../models/unidata')

uniCtrl.getUnis = async(req,res)=>{
    const Uni = await Uname.find()
    //const Uni = await Uname.findOne({UniNam:'Universidad Nacional de San Agustin'})
    res.json(Uni)
}

uniCtrl.postUnis = async(req,res)=>{
    const {UniNam,UniTip,UniLic,UniPer,UniCit,UniBe18,UniEnt,UniPos,UniIfr} = req.body
    const uname = new Uname ({UniNam,UniTip,UniLic,UniPer,UniCit,UniBe18,UniEnt,UniPos,UniIfr})
    await uname.save()
    res.json({status:'Uni saved'})
}

uniCtrl.putUnis = async(req,res)=>{
    const {UniNam,UniTip,UniLic,UniPer,UniCit,UniBe18,UniEnt,UniPos,UniIfr} = req.body
    const newUname = {UniNam,UniTip,UniLic,UniPer,UniCit,UniBe18,UniEnt,UniPos,UniIfr}
    await Uname.findByIdAndUpdate(req.params.id,newUname)
    /* await Uname.findOneAndUpdate({UniNam:'Universidad Nacional de San Agustin'},{
        UniBe18: false
    }) */
    res.json({status:'Uni Updated'})
}
/*
uniCtrl.deleteUnis = async(req,res)=>{
    //await Uname.findByIdAndDelete(req.params.id)
    await Uname.findOneAndDelete({UniNam:'Universidad Nacional de San Agustin'})
    res.json({status:'Uni Deleted'})
} */

module.exports = uniCtrl