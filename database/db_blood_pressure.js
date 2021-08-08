import { query, queryRow, queryRows, queryRowsLength } from "../common/db_functions.js";

export function insertBloodPressure(systolic, diastolic, pulse, category) {
    const query = `INSERT INTO blood_pressure_tab (systolic, diastolic, pulse, category) VALUES ($1, $2, $3, $4) RETURNING *;`;
    const params = [systolic, diastolic, pulse, category];
    return queryRows(query, params);
}

export function getBloodPressure() {
    const query = `SELECT * FROM blood_pressure_tab;`;
    return queryRows(query);
}