import { query, queryRow, queryRows, queryRowsLength } from "../common/db_functions.js";

export function insertCalories(foodData, totalCalories) {
    const query = `INSERT INTO calories_tab (food, calories) VALUES ($1, $2) RETURNING *;`;
    const params = [foodData, totalCalories];
    return queryRows(query, params);
}

export function getCalories() {
    const query = `SELECT * FROM calories_tab;`;
    return queryRows(query);
}