import mongoose from "mongoose";
import { Schema } from "mongoose";

const PodcastModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    link: {
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

const Podcast = mongoose.model("Podcast", PodcastModel);

export default Podcast;
