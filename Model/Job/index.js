const mongoose = require("mongoose")

const {Schema} = mongoose

const JobSchema = new Schema({
  job_name: String,
  contact_details: String,
  job_identifier: {
    type: String,
    default: (generateRandom = (job) => {
      return job.job_name.substring(0,4) + (Math.floor(Math.random() * 1000) + 1)
    }),
    unique: true,
  },
  status: {
    type: String,
    enum: ["scheduled", "active", "invoicing", "to priced", "completed"],
  },
  created_on: { type: Date, default: Date.now() },
  updated_on: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Job", JobSchema, "Job");

