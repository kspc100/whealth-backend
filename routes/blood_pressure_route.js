import express from "express";
const bloodPressureRouter = express.Router();
import * as bloodPressureDatabase from "../database/db_blood_pressure.js";

// POST /bloodPressure
bloodPressureRouter.post('/', (req, res, next) => {
    const { sys, dia, pul, category } = req.body;
    console.log(sys, dia, pul, category)
    return bloodPressureDatabase.insertBloodPressure(sys, dia, pul, category)
        .then((result) => res.status(201).json(result))
        .catch(next)
})

// GET /bloodPressure
bloodPressureRouter.get('/', (req, res, next) => {
    return bloodPressureDatabase.getBloodPressure()
        .then((result) => res.status(200).json(result))
})
    
export default bloodPressureRouter;

// return queueManager
    //     .enqueue()
    //     .then((response) => res.status(201).json(response))
    //     .catch(next)