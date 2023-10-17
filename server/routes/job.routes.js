import express from "express";
import multer from "multer";
import {
  addJob,
  getAllJobs,
  getJobById,
  deleteJobById,
  deleteAllJobs,
  searchJobs,
} from "../controllers/job.controller.js";

const upload = multer({
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg|jfif|PNG|svg|webp|gif)$/)) {
      return cb(new Error("Please upload valid image format"));
    }
    return cb(undefined, true);
  },
  limits: {
    fileSize: 1000000,
  },
});

const jobRouter = express.Router();

jobRouter.route("/createJob").post(upload.any(), addJob);
jobRouter.route("/getJobs").get(getAllJobs);
jobRouter.route("/getJobs/:key").get(searchJobs);
jobRouter.route("/getJob/:id").get(getJobById);
jobRouter.route("/deleteJob/:id").delete(deleteJobById);
jobRouter.route("/deleteJobs").delete(deleteAllJobs);

export default jobRouter;
