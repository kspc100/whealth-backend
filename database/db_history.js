import { query, queryRow, queryRows, queryRowsLength } from "../common/db_functions.js";

export function clearBloodPressure() {
    const sqlQuery = `DELETE FROM blood_pressure_tab`;
    return query(sqlQuery);
}