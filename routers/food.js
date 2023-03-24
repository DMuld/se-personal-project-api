import express from "express"
import { test, insertFoodRow, readFoodRows, readAllFoodRows } from "../controllers/food.js";

const router = express.Router();

router.get("/test", test);

router.post("/readFoodRows", readFoodRows);

router.get("/readAllFoodRows", readAllFoodRows);

router.post("/insertFoodRow", insertFoodRow)

export default router;