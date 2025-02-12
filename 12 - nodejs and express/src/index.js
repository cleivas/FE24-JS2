import express from "express";

const PORT = 3000;
const app = express();
app.use(express.json())

// Låtsas databas
const movies = [
    {
        title: 'Titanic',
        year: 1997
    },
    {
        title: 'Red',
        year: 2010
    }
]

app.get('/', (req, res)=>{
    res.send('GET request received.')
})

app.get('/movies', (req, res)=>{
    res.json(movies);
})

app.post('/movies', (req, res)=>{
    const newMovie = req.body;
    movies.push(newMovie)

    res.json({message: `Movie ${newMovie.title} added`});
})

app.patch('/movies', (req, res)=>{

    const {id, year} = req.query;
    console.log(id, year)

    movies[id].year = year;

    res.json({
        message: 'Movie patched',
        movie: movies[id]
    });
})

app.delete('/movies/:id', (req, res)=>{
    const {id} = req.params;

    movies.splice(id, 1);

    res.json(movies);
})


app.listen(PORT, ()=>{
    console.log('Listening on port ', PORT)
})