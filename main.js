import express from "express";

const app = express();

const PORT = 5001;

app.get("/", (req, res) => {
  res.json({ msg: "Hello Students!!" });
});

// CRUD functionality of movies
// R - Reading
app.get("/movies", (req, res) => {});

// C - Create
app.post("/movies", (req, res) => {});

// U - Update
app.put("/movies/:id", (req, res) => {});

// D - Delete
app.delete("/movies/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`This server is running at http://localhost:${PORT}`);
});
