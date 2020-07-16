const express = require('express')
const router = express.Router()

const {getUnis,postUnis,putUnis,deleteUnis} = require('../controllers/universidades.controller')

router.get('/',getUnis)
router.post('/',postUnis)
router.put('/:id',putUnis)

/* router.delete('/',deleteUnis) */

module.exports = router