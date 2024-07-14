const Project = require('../models/Project');
const Task = require('../models/Task');
const mongoose = require("mongoose");

module.exports = {
    getProjects: async (req,res) => {
        try {
            const projects = await Project.find({ members: req.user.id }).lean();
            for (let project of projects) {
                if (project.owner == req.user.id) {
                    project.own = true;
                } else {
                    project.own = false;
                }
                project.tasks = await Task.find({ project: project._id }).lean();
            }
            res.render("projects.ejs", { user: req.user, projects: projects });
        } catch(err) {
            console.log(err)
        }    
    },
    newProject: async (req,res) => {
        try {
            if (req.body.name) {
                const project = {
                    owner: req.user.id,
                    name: req.body.name,
                    members: [req.user.id],
                };            
                await Project.create(project);
            }
            res.redirect("/projects");
        } catch(err) {
            console.log(err)
        }    
    },
    newTask: async (req,res) => {
        try {
            if (req.body.name) {
                const task = {
                    owner: req.user.id,
                    name: req.body.name,
                    objective: req.body.objective,
                    project: new mongoose.Types.ObjectId(req.body.project),
                    deadline: req.body.deadline,
                };            
                await Task.create(task);
            }
            res.redirect("/projects");
        } catch(err) {
            console.log(err)
        }    
    },
}