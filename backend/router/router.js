const express = require('express')
const router = express.Router()

const { getPersonnel } = require('../controllers/controller')

router.get('/personnel', getPersonnel)


module.exports = router 
