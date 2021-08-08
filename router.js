import dotenv from "dotenv"
dotenv.config()
import app from './app.js';
import { initializeDatabase } from "./database/db_init.js";
import bloodPressureRouter from "./routes/blood_pressure_route.js";
import historyRouter from "./routes/history_route.js";

app.get("/test", (req, res) => res.send(`Test success: wHealth backend server listening on port ${port}`));

app.post("/resetDatabase", (req, res, next) => {
    initializeDatabase()
        .then(() => res.send(`Database Successfully reset`))
        .catch(next)
})

// Routes
app.use("/bloodPressure", bloodPressureRouter);
app.use("/history", historyRouter)

// 404 Error Handler
app.use((req, res, next) => {
    next(req);
})

// General Error Handler
app.use((err, req, res, next) => {
    const status = err.status ?? 500;
    const message = err.message ?? "Unknown Error";

    console.error(err);
    res.status(status).json({ error: message });
})

// Start server on port 8080
const port = process.env.PORT ?? 8080;
app.listen(port, err => console.log(err ?? `wHealth backend server listening on port ${port}`));