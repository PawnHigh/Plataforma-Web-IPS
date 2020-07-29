/* CREACION DEL SERVIDOR CON EXPRESS */

// Build server
const express=require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

// Settings
app.set('port',process.env.PORT || 4000);

// Middleware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json()) // Allow json format

// Routing
app.use('/api',require('./routes/root.routes'))
app.use('/api/unis', require('./routes/universidades.routes'))
app.use('/api/programas', require('./routes/programas.routes'))
app.use('/api/users', require('./routes/usuarios.routes'))
app.use('/api/becas', require('./routes/becas.routes'))
app.use('/api/mejores', require('./routes/mejores.routes'))

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')))

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'))
});

// Export
module.exports=app