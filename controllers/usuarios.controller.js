const userCtrl = {}
const User = require('../models/userdata')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

userCtrl.getUser = async (req, res) => {
    const user = await User.find()
    res.json(user)
}

userCtrl.postUser = async (req, res) => {
    const { Username, Email } = req.body
    try {
        const emailUser = await User.findOne({ Email: Email })
        if (emailUser) {
            // If emailUser already exist do something
            throw new Error(`Email Already Exist`)
        } else {
            const user = new User({ Username, Email })
            await user.save()

            // Send Message to Email ---------------------------
            const transporter = nodemailer.createTransport(
                sendgridTransport({
                    auth: {
                        api_key: process.env.SENDGRID_API_KEY
                    }
                }))

            contentHTML = `
            <h1>Bienvenido a CUEFU</h1>
            <p>La mejor plataforma digital para escoger una universidad</p>
            <h3>Tus Datos Personales</h3>
            <ul>
                <li>Username: ${Username}</li>
                <li>Correo Electrónico: ${Email}</li>
            </ul>
            <p>Muchas gracias por confiar en nosotros 
            <br> 
            En caso de una actualización te lo haremos saber</p>
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
            res.json({ status: 'User Saved and Email Sent' })
        }
    } catch (error) {
        console.log("ERROR >>> ", error)
    }
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({ status: 'User Deleted' })
}

module.exports = userCtrl