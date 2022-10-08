var router = require("express").Router();
var Jobs = require("../../Model/Job/index");
var jsonParser = require("body-parser").json();
var mongoose = require("mongoose");



const addJob = async function(req, res, next) {
    const job = req.body;
    try {
      const jobInfo = new Jobs(job);
      return jobInfo.save(function(err, job) {
        if (err) res.send(err);
  
        res.send(job);
      });
    } catch (e) {
      next(e);
    }
  };
  

  const getJobById = async function(req, res, next) {
    let id = req.params.id;
    try {
        Jobs.find({ _id: id }, function(err, result) {
        if (err) res.send(500);
  
        res.send(result);
      });
    } catch (e) {
      next(e);
    }
  };

  const getAllJobs = async function(req, res, next) {
    try {
        Jobs.find({}, function(err, result) {
        if (err) res.send(500);
  
        res.send(result);
      });
    } catch (e) {
      next(e);
    }
  };


  const updateJob = async function(req, res, next) {
    const job = req.body;
    const filter = { _id: job._id };
    delete job._id;
    const updateDetails = job;
    console.log(updateDetails)
    try {
      await Jobs.findOneAndUpdate(
        filter,
        { $set: updateDetails },
        { returnOriginal: false },
        function(err, result) {
          if (err) res.send(response.dbError());
  
          res.send(result);
        }
      );
    } catch (e) {
      next(e);
    }
  };




router.get("/jobs/:id", getJobById);

router.post("/jobs", jsonParser, addJob);

router.put("/jobs", jsonParser, updateJob);

router.get("/jobs", jsonParser,getAllJobs);


module.exports = router;