import express, { NextFunction, Request, Response } from "express";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

function firstMiddleware(req: Request, res: Response, next: NextFunction){
    console.log('in first middleware', req.body);
    req.body.added = 'This prop was added in the first middleware'
    next();
}

function secondMiddleware(req: Request, res: Response, next: NextFunction){
    console.log('in second middleware', req.body);
    next();
}

app.use(secondMiddleware);
app.post('/', (req, res)=>{
    res.json(req.body)
})

app.use(firstMiddleware);
app.get('/', (req, res)=>{
    res.json(req.body)
})


app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})
