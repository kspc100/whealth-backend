import getPool from "../database/db_init.js";
const pool = getPool();

export function query(query, params) {
    return pool.query(query, params);
}

export function queryRow(query, params) {
    return pool.query(query, params).then(result => result.rows[0]);
}

export function queryRows(query, params) {
    return pool.query(query, params).then(result => result.rows);
}

export function queryRowsLength(query, params) {
    return pool.query(query, params).then(result => result.rows.length);
}