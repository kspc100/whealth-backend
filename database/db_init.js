import pg from "pg";

const databaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
}

let pool;
export default function getPool() {
    if (!pool) pool = new pg.Pool(databaseConfig);
    return pool;
}

export function initializeDatabase() {
    return pool.query(`
        DROP TABLE IF EXISTS blood_pressure_tab;
        CREATE TABLE blood_pressure_tab (
            blood_pressure_id SERIAL,
            systolic int not null,
            diastolic int not null,
            pulmonary int not null
        );
    `)
}

// DROP TABLE IF EXISTS question_tab;
//         CREATE TABLE question_tab (
//             session_id VARCHAR(10) not null,
//             question_id SERIAL,
//             question VARCHAR(500) not null,
//             answer VARCHAR(500),
//             questionNumber int null
//         );