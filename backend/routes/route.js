const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");

const {
  create,
  update,
  deleteJob,
  getJobs,
  viewAppliedJobs,
} = require("./../src/jobController");

const { jobListing } = require("./../src/jobListingController");
const { applyJob } = require("./../src/applyJobController");
const { searchJob } = require("./../src/searchJob");
const {
  registration,
  login,
  employerRegistration,
} = require("./../src/loginController");

router.use(
  [
    "/job/create",
    "/job/update",
    "/job/delete/:id",
    "/jobs",
    "/jobs/listing",
    "/apply/job/:id",
    "/view/job/:id",
    "/search-job",
  ],
  verifyToken
);

router.route("/job/create").post(create);
router.route("/job/update").put(update);
router.route("/job/delete/:id").delete(deleteJob);
router.route("/jobs").get(getJobs);
router.route("/view/job/:id").get(viewAppliedJobs);

router.route("/apply/job/:id").put(applyJob);

router.route("/jobs/listing").get(jobListing);

router.route("/search-job").post(searchJob);

router.route("/sign-up").post(registration);
router.route("/employer/sign-up").post(employerRegistration);
router.route("/sign-in").post(login);

module.exports = router;
