import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    // Define other fields here
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
