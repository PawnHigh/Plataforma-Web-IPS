const express = require('express')
const router = express.Router()


const {getUser,postUser,deleteUser} = require('../controllers/usuarios.controller')

router.get('/',getUser)
router.post('/',postUser)
router.post('/:id',deleteUser) 


module.exports = router