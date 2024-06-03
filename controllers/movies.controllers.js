import Movie from "../models/movie.model.js";
// Get allmovies list
export const moviesIndex = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Single movie
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
// Get Single Movie
export const movieDetails = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie cannot found" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const movieUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie cannot found" });
    }
    const updatedMovie = await Movie.findOneAndUpdate(
      { id: req.params._id },
      {
        title: req.body.title || title,
        desc: req.body.desc || desc,
      },
      { new: true }
    );
    res.status(200).json({ updatedMovie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const movieDelete = (req, res) => {
  res.send("Delete a movie");
};
