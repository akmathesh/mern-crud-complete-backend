export const moviesIndex = (req, res) => {
  res.send("Get all movie lists");
};

export const movieCreate = (req, res) => {
  return res.json(req.body);
};

export const movieUpdate = (req, res) => {
  res.send("Update a movie");
};

export const movieDelete = (req, res) => {
  res.send("Delete a movie");
};
