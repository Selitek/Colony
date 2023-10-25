const express = require('express')
const router = express.Router()
const { ensureAuth } = require("../middleware/auth");
const authController = require('../controllers/auth')
const passport = require("passport");
const githubAuth = passport.authenticate('github', { scope: [ 'user:profile' ] });
const githubCallback = passport.authenticate('github', { failureRedirect: '/' });

router.get("/github", githubAuth);
router.get("/github/callback", githubCallback, authController.callback);
router.get("/logout", ensureAuth, authController.logout);

module.exports = router