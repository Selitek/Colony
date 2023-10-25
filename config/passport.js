const githubStrategy = require("passport-github2").Strategy
const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = function(passport) {
    passport.use(new githubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
        const newUser = {
            githubId: profile.id,
            displayName: profile.username
        }

        try {
            let user = await User.findOne({ githubId: profile.id });

            if (user) {
                done(null, user);
            } else {
                user = await User.create(newUser);
                done(null, user);
            }
        } catch(err) {
            console.log(err);
        }
    }))

    passport.serializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, {
            id: user.githubId,
            username: user.displayName
          });
        });
      });
      
    passport.deserializeUser(function(user, cb) {
        process.nextTick(function() { return cb(null, user) });
    });
}