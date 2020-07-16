const mongoose = require('mongoose')
const {Schema} = mongoose

const becaData = new Schema({
    BecUni: {
        type: String,
        required: true,
    },
    BecReg:{
        type: String,
        required: true,
        unique: true
    },
    BecSed:{
        type: String,
        required: true,
        unique: true
    },
    BecCar:{
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('becas', becaData) 