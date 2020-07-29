const mongoose = require('mongoose')
const { Schema } = mongoose

const uniData = new Schema({
    UniNam: {
        type: String,
        required: true
    },
    UniTip: {
        type: String,
        required: true
    },
    UniLic: {
        type: String,
        required: true
    },
    UniPer: {
        type: Number,
        required: true
    },
    UniCit: {
        type: String,
        required: true
    },
    UniBe18: {
        type: Boolean,
        required: true
    },
    UniEnt: {
        type: new Array(),
        required: true
    },
    UniPos: {
        type: new Array(),
        required: true
    },
    UniIfr: {
        type: String,
        required: true
    }
})

// El nombre Task se convertira en la base de datos como una coleccion llamada tasks
module.exports = mongoose.model('universidades', uniData)

