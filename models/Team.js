const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  members: [{
      type: Number,
      required: true
  }],
  projects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true
  }],
})
module.exports = mongoose.model('Team', TeamSchema)
