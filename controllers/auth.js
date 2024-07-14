module.exports = {
    github: (req,res) => {
        try {
            passport.authenticate('github', { scope: [ 'user:profile' ] });
        } catch(err) {
            console.log(err);
        }
    },
    callback: async (req, res) => {
        try {
            res.redirect('/dashboard');
        } catch(err) {
            console.log(err);
        }
    },
    logout: async (req, res) => {
        req.logout(function(err) {
            if (err) { return next(err) };
            res.redirect("/");    
        });
    }
}

