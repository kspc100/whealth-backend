import express from "express";
const bloodPressureRouter = express.Router();
import bloodPressureDatabase from "./database/db_blood_pressure.js";

// POST /bloodPressure
bloodPressureRouter.post('/', async (req, res, next) => {
    return tryCallQuery(
        bloodPressureDatabase.insertBloodPressure,
        (result) => res.status(201).json(result)
    );  
})

// GET /bloodPressure
bloodPressureRouter.get('/', async (req, res, next) => {
    return tryCallQuery(
        bloodPressureDatabase.getBloodPressure,
        (result) => res.status(200).json(result)
    );  
})
    
export default bloodPressureRouter;

// return queueManager
    //     .enqueue()
    //     .then((response) => res.status(201).json(response))
    //     .catch(next)