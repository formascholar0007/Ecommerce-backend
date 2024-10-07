require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
;

app.use(express.json());

connectDB();


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
