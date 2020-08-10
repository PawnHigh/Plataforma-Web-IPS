const express = require('express')
const router = express.Router()

const {getPro} = require('../controllers/programas.controller')

router.get('/', getPro)

module.exports = router