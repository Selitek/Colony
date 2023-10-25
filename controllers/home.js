const Project = require('../models/Project');
const Task = require('../models/Task');
const Team = require('../models/Team');

module.exports = {
    getIndex: async (req,res) => {
        try {
            if (req.user) {
                res.redirect("/dashboard");
            } else {
                res.render("index.ejs");
            }
        } catch(err) {
            console.log(err)
        }    
    },
    getDashboard: async (req,res) => {
        try {
            const projects = await Project.find({ owner: req.user.id }).limit(4);
            const tasks = await Task.find({ owner: req.user.id }).limit(4);
            const teams = await Team.find({ members: req.user.id }).limit(4);
            res.render("dashboard.ejs", { user: req.user, projects: projects, tasks: tasks, teams: teams });
        } catch(err) {
            console.log(err);
        }
    }
}