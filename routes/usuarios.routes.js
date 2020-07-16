const express = require('express')
const router = express.Router()


const {getUser,postUser,deleteUser} = require('../controllers/usuarios.controller')

router.get('/',getUser)
router.post('/',postUser)
router.delete('/:id',deleteUser) 


module.exports = router