import express from "express";
const caloriesRouter = express.Router();
import * as caloriesDatabase from "../database/db_calories.js";

// POST /calories
caloriesRouter.post('/', (req, res, next) => {
    const { foodData, totalCalories } = req.body;
    return caloriesDatabase.insertCalories(foodData, totalCalories)
        .then((result) => res.status(201).json(result))
        .catch(next)
})

// GET /calories
caloriesRouter.get('/', (req, res, next) => {
    return caloriesDatabase.getCalories()
        .then((result) => res.status(200).json(result))
})

export default caloriesRouter;