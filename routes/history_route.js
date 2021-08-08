import express from "express";
const historyRouter = express.Router();
import * as historyDatabase from "../database/db_history.js";

// delete /history/bloodPressure
historyRouter.delete('/bloodPressure', (req, res, next) => {
    return historyDatabase.clearBloodPressure()
        .then(() => res.sendStatus(204))
        .catch(next)
})

export default historyRouter;