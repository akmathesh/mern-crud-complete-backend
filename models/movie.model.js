import mongoose, { Schema, model } from "mongoose";

// Write the schema
const movieSchema = new Schema({
  title: String,
  desc: String,
});

// Create Model
const Movie = model("Movie", movieSchema);

export default Movie;
