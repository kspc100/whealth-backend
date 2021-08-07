import { query, queryRow, queryRows, queryRowsLength } from "../common/db_functions.js";

export function insertBloodPressure(systolic, diastolic, pulmonary) {
    const query = `INSERT INTO blood_pressure_tab (systolic, diastolic, pulmonary) VALUES ($1, $2, $3) RETURNING *;`;
    const params = [systolic, diastolic, pulmonary];
    return queryRows(query, params);
}

export function getBloodPressure() {
    const query = `SELECT * FROM blood_pressure_tab;`;
    return queryRows(query);
}