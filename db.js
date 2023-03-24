import mysql from "mysql"

export const db = mysql.createConnection({
    host:"changme",
    port:"change",
    user:"change",
    password:"change",
    database:"change"
})