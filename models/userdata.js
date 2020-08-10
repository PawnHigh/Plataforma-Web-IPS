const mongoose = require('mongoose')
const {Schema} = mongoose

const userData = new Schema({
    Username: {
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('usuarios', userData) 