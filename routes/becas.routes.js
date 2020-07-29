const express = require('express')
const router = express.Router()

const { getBec } = require('../controllers/becas.controller')

router.get('/', getBec)

module.exports = router