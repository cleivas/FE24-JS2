import express from "express";
import cors from "cors";
import { getAllMovies, getMovie, addMovie } from "./readwritemovies.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/movies', async (req, res)=>{
    const movies = await getAllMovies()

    res.json(movies);
})

app.get('/movies/:year', async (req, res)=>{
    console.log(req.params);
    const movies = await getMovie(Number(req.params.year));
    res.json(movies);
})

app.post('/movies', async (req, res)=>{
    const message = await addMovie(req.body);
    res.json({message});
})

app.listen(PORT, ()=>{
    console.log("Server listening on port", PORT);
})