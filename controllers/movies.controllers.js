import Movie from "../models/movie.model.js";

export const moviesIndex = (req, res) => {
  res.send("Get all movie lists");
};

export const movieCreate = async (req, res) => {
  // validate your data
  const { title, desc } = req.body;
  const newMovie = new Movie({
    title,
    desc,
  });
  // Successful or Error
  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const movieUpdate = (req, res) => {
  res.send("Update a movie");
};

export const movieDelete = (req, res) => {
  res.send("Delete a movie");
};
