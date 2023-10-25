const Project = require('../models/Project');
const Task = require('../models/Task');
const mongoose = require("mongoose");

module.exports = {
    getTasks: async (req,res) => {
        try {
            const tasks = await Task.find({ owner: req.user.id }).lean();
            res.render("tasks.ejs", { user: req.user, tasks: tasks });
        } catch(err) {
            console.log(err)
        }    
    },
    updateTask: async (req,res) => {
        try {
        
        } catch(err) {
            console.log(err)
        }    
    },
}