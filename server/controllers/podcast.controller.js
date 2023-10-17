import Podcast from "../models/podcast.model.js";

const addPodcast = async (req, res) => {
  const { name, title, link } = req.body;
  if (!name || !title || link < 1) {
    res.status(400).json({ message: "Please Provide valid details" });
    // throw new Error("Please provide valid details");
  }
  const imageBuffer = req.files?.[0]?.buffer ? req.files?.[0]?.buffer : null;

  const podcast = new Podcast({
    name,
    title,
    link,
    image: imageBuffer,
  });
  await podcast.save();

  res.status(201).json({ podcast, message: "Podcasts created successfully" });
};

const getAllPodcasts = async (req, res) => {
  const podcasts = await Podcast.find().sort({ createdAt: -1 });
  const finalPodcasts = podcasts.map((podcast) => {
    if (podcast.image) {
      let buffer = Buffer.from(podcast.image);
      let base64Image = buffer.toString("base64");

      const { _id, name, title, link } = podcast;

      return {
        image: base64Image,
        _id,
        name,
        title,
        link,
      };
    } else {
      return podcast;
    }
  });
  res
    .status(201)
    .json({
      podcasts: finalPodcasts,
      message: "Fetched Podcasts Successfully",
    });
};

const deleteAllPodcasts = async (req, res) => {
  await Job.deleteMany();
  res.status(200).json({ message: "Podcasts Deleted Successfully" });
};

export { addPodcast, getAllPodcasts, deleteAllPodcasts };
