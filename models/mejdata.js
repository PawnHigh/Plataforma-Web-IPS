const mongoose = require('mongoose')
const {Schema} = mongoose

const mejoresData = new Schema({
    MejNom: {
        type: String,
        required: true,
        unique: true
    },
    MejPer:{
        type: Number,
        required: true,
    },
    MejTip:{
        type: String,
        required: true
    },
    MejReg:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('mejores', mejoresData) 