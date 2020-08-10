const express = require('express')
const router = express.Router()

const { getUnis, getJustUni, postUnis, putUnis, deleteUnis } = require('../controllers/universidades.controller')

router.get('/', getUnis)
router.get('/:id', getJustUni)
router.post('/', postUnis)
router.put('/:id', putUnis)

/* router.delete('/',deleteUnis) */

module.exports = router