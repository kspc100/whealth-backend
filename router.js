import dotenv from "dotenv"
dotenv.config()
import app from './app.js';
import bloodPressureRouter from "./routes/blood_pressure_route.js";

// To reset the database, run the init() method:
// Ama.init();

// Routes
app.use("/bloodPressure", bloodPressureRouter);

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