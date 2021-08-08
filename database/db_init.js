import pg from "pg";

const databaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV !== 'production' ? false : { rejectUnauthorized: false },
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
            pulse int not null,
            category varchar(25) not null
        );

        DROP TABLE IF EXISTS medicine_tab;
        CREATE TABLE medicine_tab (
            medicine_id SERIAL,
            medicine_name varchar(255) not null,
            time varchar(5) not null,
            food_prefix varchar(5) not null, 
            day_of_week varchar(9) not null
        );

        DROP TABLE IF EXISTS calories_tab;
        CREATE TABLE calories_tab (
            calories_id SERIAL
        );
    `)
}
// [1, "Panadol", '12:00', "After"],
                // [2, "Paracetamol", '19:00', "Before"]

// DROP TABLE IF EXISTS question_tab;
//         CREATE TABLE question_tab (
//             session_id VARCHAR(10) not null,
//             question_id SERIAL,
//             question VARCHAR(500) not null,
//             answer VARCHAR(500),
//             questionNumber int null
//         );