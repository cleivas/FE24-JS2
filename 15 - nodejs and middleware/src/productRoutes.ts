import { NextFunction, Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";


// Validera så att bodyn i en post request för att lägga till en produkt innehåller
/**
 * title: string
 * price: numeric
 * img: string
 * stock: numeric
 * discount: boolean
*/

const productValidations = [
    body('title').exists().isString(),
    body('image').exists().isString(),
    body('discount').exists().isBoolean(),
    body('price').exists().isNumeric(),
    body('stock').exists().isNumeric(),
]

export const productRouter = Router();

productRouter.get('/', (req, res)=>{

    res.json({message: 'All products'})
})

productRouter.get('/:id', (req, res)=>{
    res.json({message: 'product with id ' + req.params.id})
})

productRouter.post('/add', productValidations, (req:Request, res: Response, next: NextFunction)=>{
    try {
        const errors = validationResult(req);

        if (errors.array().length > 0) {
            res.status(400);
            throw new Error('Product is in wrong format')
        }
        else {
            res.json({ newUser: req.body })
        }

    }
    catch (error) {
        next(error);
    }
} )