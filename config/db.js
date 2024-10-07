const mongoDB = require("mongoose")

const dbConnection  = async () => {
    try {
        await mongoDB.connect(process.env.MONGODB_URL)
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnection