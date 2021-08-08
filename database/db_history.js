import { query } from "../common/db_functions.js";

export function clearBloodPressure() {
    const sqlQuery = `DELETE FROM blood_pressure_tab`;
    return query(sqlQuery);
}

export function clearCalories() {
    const sqlQuery = `DELETE FROM calories_tab;`;
    return query(sqlQuery);
}