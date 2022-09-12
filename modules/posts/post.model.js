const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
    },
    body: {
      type: String,
      required: true,
      minLength: 10,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = model("Post", postSchema);
