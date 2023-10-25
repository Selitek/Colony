const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  owner: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "incomplete"
  },
  members: [{
      type: Number,
      required: true
  }],
})

module.exports = mongoose.model('Project', ProjectSchema)
