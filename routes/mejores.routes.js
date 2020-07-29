const express = require('express')
const router = express.Router()

const { getMej } = require('../controllers/mejores.controller')

router.get('/', getMej)

module.exports = router