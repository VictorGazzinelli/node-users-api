import express, { Router, Request, Response } from 'express'

const router : Router = express.Router();

router.use(express.json())

/**
 * @swagger
 * /user:
 *  get:
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', (req : Request, res : Response) =>{
    res.status(200),
    res.json({Nome: "Victor"})
});

export default router;