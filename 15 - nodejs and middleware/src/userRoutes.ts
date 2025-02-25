import { NextFunction, Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";

const userValidations = [
    body('name').exists().isString(),
    body('admin').exists().isBoolean(),
    body('age').exists().isNumeric()
]


export const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.json({ message: 'All users' })
})

userRouter.get('/:id', (req, res) => {
    res.json({ message: 'users with id ' + req.params.id })
})

userRouter.post('/new', userValidations, (req: Request, res: Response, next: NextFunction) => {

    try {
        const errors = validationResult(req);

        if (errors.array().length > 0) {
            res.status(400);
            throw new Error('User is in wrong format')
        }
        else {
            res.json({ newUser: req.body })
        }

    }
    catch (error) {
        next(error);
    }
})