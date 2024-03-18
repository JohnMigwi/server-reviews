import express from 'express';
import cors from 'cors';
import moviesRouter from './api/movies.route.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Connect to MongoDB using createConnection


dotenv.config()
const connection = mongoose.createConnection(process.env.MOVIEREVIEW_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Event listeners to handle connection events
connection.on('connected', () => {
    console.log("Connected to MongoDB");
});

connection.on('error', (err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
});

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/movies", moviesRouter);

app.use('*', (req,res) => {
    res.status(404).json({error:"not found"});
});

export default app;
