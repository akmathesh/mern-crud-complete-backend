import express from "express";
import movieRoute from "./routes/movies.route.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 5001;

// Connect DB
connectDB();

app.get("/", (req, res) => {
  res.json({ msg: "Hello Students!!" });
});

// CRUD functionality of movies
// Middlewares
app.use("/movies", movieRoute);

app.listen(PORT, () => {
  console.log(`This server is running at http://localhost:${PORT}`);
});
