import express from "express"
import foodRoutes from "./routers/food.js"

const app = express();

app.use(express.json());
app.use("/api", foodRoutes);

app.listen(8800, () => {
    console.log("Connected");
})