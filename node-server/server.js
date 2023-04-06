import express from "express";
import data from "./data.js";

// simple server access to data at this address:
const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products)
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})