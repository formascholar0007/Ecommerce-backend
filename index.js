require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const authrouter = require("./routes/auth.routes");

app.use(express.json());

connectDB();

app.use("/api/auth", authrouter);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})
