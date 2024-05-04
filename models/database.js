const mongoose = require("mongoose");

exports.connectDatabase = async() =>{
try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected To Database Successfully")
} catch (error) {
    console.log("Error Occured" , error)
}
}