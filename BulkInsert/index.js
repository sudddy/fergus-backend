// Import the mongoose module
const mongoose = require("mongoose");
const { Schema } = mongoose;

const mongoDB = "mongodb://localhost:27017/fergus"; // Admin access is provided
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("Connection Successful!");

  var JobSchema = new Schema({
    job_name: String,
    contact_details: String,
    job_identifier: {
      type: String,
      default: (generateRandom = (job) => {
        return (
          job.job_name.substring(0, 4) + (Math.floor(Math.random() * 1000) + 1)
        );
      }),
      unique: true,
    },
    status: {
      type: String,
      enum: ["scheduled", "active", "invoicing", "to priced", "completed"],
    },
    notes: [String],
    created_on: { type: Date, default: Date.now() },
    updated_on: { type: Date, default: Date.now() },
  });

  // compile schema to model
  var Jobs = mongoose.model("Job", JobSchema, "Job");

  // documents array
  var jobdata = [
    { job_name: "Thor", contact_details: "123456789", status: "completed" },
    {
      job_name: "Captain America",
      contact_details: "123456789",
      status: "completed",
    },
    { job_name: "Iron Man", contact_details: "123456789", status: "completed" },
    {
      job_name: "Avengers",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "John",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Scott",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Micheal",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Jim",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Dwight",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Rachel",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Doctor Strange",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Avatar",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Joey",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Phil Dunphy",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Claire",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Walter White",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
    {
      job_name: "Jessy Pinkman",
      contact_details: "4567887",
      status: "scheduled",
      notes: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Phasellus sapien eros, interdum vitae ante in",
        "Morbi nibh ex, congue ac consequat eget, fermentum a nunc.",
        "Cras lacinia, eros sed consequat suscipit, ex quam semper mauris",
      ],
    },
  ];

  // save multiple documents to the collection referenced by Book Model
  Jobs.insertMany(jobdata, function (err, docs) {
    if (err) {
      return console.error(err);
      process.exit(1);
    } else {
      console.log("Multiple documents inserted to Collection");
      process.exit(1);
    }
  });
  
});
