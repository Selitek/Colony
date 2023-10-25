const express = require('express')
const router = express.Router()
const { ensureAuth } = require("../middleware/auth");
const projectsController = require('../controllers/projects')

router.get('/', projectsController.getProjects);
router.post('/new', projectsController.newProject);
router.post('/newTask', projectsController.newTask);

module.exports = router