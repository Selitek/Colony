const express = require('express')
const router = express.Router()
const { ensureAuth } = require("../middleware/auth");
const projectsController = require('../controllers/tasks')

router.get('/', projectsController.getTasks);

module.exports = router