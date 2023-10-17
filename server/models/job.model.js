import mongoose from "mongoose";
import { Schema } from "mongoose";

const JobModel = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    stipend: {
      type: String,
      default: "Unavailable",
    },
    batch: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: Buffer,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", JobModel);

export default Job;
