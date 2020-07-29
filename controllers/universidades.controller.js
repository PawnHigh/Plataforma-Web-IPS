const uniCtrl = {}
const Uname = require('../models/unidata')
const User = require('../models/userdata')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

uniCtrl.getUnis = async (req, res) => {
    const Uni = await Uname.find()
    //const Uni = await Uname.findOne({UniNam:'Universidad Nacional de San Agustin'})
    res.json(Uni)
}

uniCtrl.getJustUni = async (req, res) => {
    const Uni = await Uname.findById(req.params.id)
    //const Uni = await Uname.findOne({UniNam:'Universidad Nacional de San Agustin'})
    res.json(Uni)
}


uniCtrl.postUnis = async (req, res) => {
    const { UniNam, UniTip, UniLic, UniPer, UniCit, UniBe18, UniEnt, UniPos, UniIfr } = req.body
    const uname = new Uname({ UniNam, UniTip, UniLic, UniPer, UniCit, UniBe18, UniEnt, UniPos, UniIfr })
    await uname.save()
    res.json({ status: 'Uni saved' })
}

uniCtrl.putUnis = async (req, res) => {
    const users = await User.find()
    const { UniNam, UniTip, UniLic, UniPer, UniCit, UniBe18, UniEnt, UniPos, UniIfr } = req.body
    const newUname = { UniNam, UniTip, UniLic, UniPer, UniCit, UniBe18, UniEnt, UniPos, UniIfr }
    await Uname.findByIdAndUpdate(req.params.id, newUname)
    const uniChange = newUname.UniNam
    const licChange = newUname.UniLic
    sendUpdate = async () => {
        for (var usuarios in users) {
            const Username = users[usuarios].Username
            const Email = users[usuarios].Email
            // Send Message to Email ---------------------------
            const transporter = nodemailer.createTransport(
                sendgridTransport({
                    auth: {
                        api_key: process.env.SENDGRID_API_KEY
                    }
                }))

            contentHTML = `
            <h1>Actualización CUEFU !!!</h1>
            <br> 
            <div style="border-style: groove;" align="center">
                <h3">Estimado/a ${Username}, te hacemos saber que ...</h3> 
                <p>
                    La Universidad ${uniChange} cambio su licenciamiento a ${licChange}
                </p>
            </div>
            <br> 
            <p>Muchas gracias por confiar en nosotros 
            <br> 
            Si no encontraste la universidad indicada para ti 
            \nNo te preocupes, te seguiremos proporcionando información.</p>
            <a target="_blank" href="https://cuefu-cultura-universitaria.herokuapp.com/licenciamiento">Más Información</a>
            `

            const mailOptions = {
                from: process.env.EMAIL,
                to: `${Email}`,
                subject: "Cultura Universitaria - Escoge Tu Futuro",
                html: `${contentHTML}`
            }

            transporter.sendMail(mailOptions, (error, info) => {
                error ? console.log(error) : console.log(`Email Sent: ${info.response}`)
            })
            // ------------------------------------------------
        }
    }
    await sendUpdate()
    res.json({ status: 'Uni Updated' })
}
/*
uniCtrl.deleteUnis = async(req,res)=>{
    //await Uname.findByIdAndDelete(req.params.id)
    await Uname.findOneAndDelete({UniNam:'Universidad Nacional de San Agustin'})
    res.json({status:'Uni Deleted'})
} */

module.exports = uniCtrl