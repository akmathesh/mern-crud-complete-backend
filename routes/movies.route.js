import express from "express";
import {
  movieCreate,
  movieDelete,
  movieDetails,
  movieUpdate,
  moviesIndex,
} from "../controllers/movies.controllers.js";

const router = express.Router();

// CRUD functionality of movies
// R - Reading all movies list
router.get("/", moviesIndex);

// C - Create
router.post("/", movieCreate);

// G - Get Single movie
router.get("/:id", movieDetails);

// U - Update
router.put("/:id", movieUpdate);

// D - Delete
router.delete("/:id", movieDelete);

export default router;
