import { json } from "express";
import { db } from "../db.js"

//Sends this information from backend to front-end
export const test = (req, res) => {
    res.json("from controller")
}

export const readAllFoodRows = (req, res) => {
    const q = "SELECT * FROM foodTracker";

    // Need to adjust this
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(200).json(data);
        console.log("Returning List!");
    });
}

export const readFoodRows = (req, res) => {
    const q = "SELECT * FROM foodTracker where food = ?";

    // Need to adjust this
    db.query(q, [req.body.food], (err, data) => {
        if (err) return res.json(err);
        console.log(data)
        console.log("Sent Specific Row Back!");
        if (data.length) return res.status(200).json(data);
    });
}

export const insertFoodRow = (req, res) => {
    const q = "INSERT INTO foodTracker(`food`, `calories`, `fat`, `carbs`, `protein`) VALUES (?)"
    const values = [
        req.body.food,
        req.body.calories,
        req.body.fat,
        req.body.carbs,
        req.body.protein,
    ]

    // return res.json("COMMAND RAN");

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(200).json("Food Row Inserted!");
        console.log("Insert Food Row!");
    });
}