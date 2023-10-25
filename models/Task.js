const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  owner: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  objective: {
    type: String,
    required: true
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    default: "incomplete"
  }
})

module.exports = mongoose.model('Task', TaskSchema)
