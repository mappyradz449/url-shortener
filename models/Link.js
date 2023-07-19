const { Schema, mongo, default: mongoose } = require("mongoose");

const linkSchema = new Schema(
  {
    originalLink: {
      type: String,
      required: true,
    },
    shortLink: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const Link = mongoose.models.Link || mongoose.model("Link", linkSchema);

export default Link;
