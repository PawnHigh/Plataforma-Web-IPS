const mongoose = require('mongoose')
const {Schema} = mongoose

const proData = new Schema({
    ProNam: {
        type: String,
        required: true
    },
    ProUni:{
        type: String,
        required: true
    },
    ProTip: { 
        type: String,
        required: true
    },
    ProLev: {
        type: String,
        required: true
    },
    ProCla: {
        type: String,
        required: true
    }
})

// El nombre Task se convertira en la base de datos como una coleccion llamada tasks
module.exports = mongoose.model('programas',proData) 

