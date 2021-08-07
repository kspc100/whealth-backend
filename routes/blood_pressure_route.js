import express from "express";

const bloodPressureRouter = express.Router();

/* POST /queue (enqueue) */
bloodPressureRouter.post('/', (req, res, next) => {
    return queueManager
        .enqueue()
        .then((response) => res.status(201).json(response))
        .catch(next)
})
    

export default bloodPressureRouter;