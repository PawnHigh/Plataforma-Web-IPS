/* CONEXIÓN DE LA BASE DE DATOS CON MONGOOSE */
const mongoose = require('mongoose')

const URI = process.env.MONGO_URI

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true
}).then(db => console.log('DB is Connected'))
  .catch(err => console.log(err))

module.exports = mongoose