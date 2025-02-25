import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./userRoutes.js";
import { productRouter } from "./productRoutes.js";


const app = express();

app.use(express.json());
app.use(cors());


app.use('/users', userRouter)
app.use('/products', productRouter)

// Om inkommande request inte hanterades, alltså metod och path matchade inget vi har anget, hamnar requesten här
app.use((req, res)=>{
    res.status(404).json({error: 'Not found'});
})

// Hantera error globalt
app.use( (err:Error, req: Request, res: Response, next: NextFunction)=>{
    // console.log(res.statusCode);
    if(res.statusCode === 200) res.status(500);

    res.json({error: err.message});
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})
