const express = require('express')
const router = express.Router()
const { ensureAuth } = require("../middleware/auth");
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)
router.get('/dashboard', ensureAuth, homeController.getDashboard)

module.exports = router