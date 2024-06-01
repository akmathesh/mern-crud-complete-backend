import express from "express";
import {
  movieCreate,
  movieDelete,
  movieUpdate,
  moviesIndex,
} from "../controllers/movies.controllers";

const router = express.Router();

// CRUD functionality of movies
// R - Reading
router.get("/", moviesIndex);

// C - Create
router.post("/", movieCreate);

// U - Update
router.put("/:id", movieUpdate);

// D - Delete
router.delete("/:id", movieDelete);

export default router;
