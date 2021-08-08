import { query, queryRow, queryRows, queryRowsLength } from "../common/db_functions.js";

export function insertMedicine() {
    const sqlQuery = `INSERT INTO medicine_tab (medicine_name, time, food_prefix, day_of_week) VALUES () RETURNING *;`;
    const params = [];
    return query(sqlQuery);
}

// medicine_name varchar(255) not null,
// time varchar(5) not null,
// food_prefix varchar(5) not null, 
// day_of_week varchar(9) not null