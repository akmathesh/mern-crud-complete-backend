import express from "express";

const router = express.Router();

// CRUD functionality of movies
// R - Reading
router.get("/", (req, res) => {
  res.send("Get all movie lists");
});

// C - Create
router.post("/", (req, res) => {
  res.send("Create a movie");
});

// U - Update
router.put("/:id", (req, res) => {
  res.send("Update a movie");
});

// D - Delete
router.delete("/:id", (req, res) => {
  res.send("Delete a movie");
});

export default router;
