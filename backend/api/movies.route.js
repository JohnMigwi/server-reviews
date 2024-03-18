import express from "express";
import Movie from "../models/movie.model.js";

const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Define other routes for CRUD operations

export default router;
