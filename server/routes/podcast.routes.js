import express from "express";
import multer from "multer";
import {
  addPodcast,
  getAllPodcasts,
  deleteAllPodcasts,
} from "../controllers/podcast.controller.js";

const upload = multer({
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg|jfif|PNG)$/)) {
      return cb(new Error("Please upload valid image format"));
    }
    return cb(undefined, true);
  },
  limits: {
    fileSize: 1000000,
  },
});

const podcastRouter = express.Router();

podcastRouter.route("/createPodcast").post(upload.any(), addPodcast);
podcastRouter.route("/getPodcasts").get(getAllPodcasts);
podcastRouter.route("/deletePodcasts").delete(deleteAllPodcasts);

export default podcastRouter;
