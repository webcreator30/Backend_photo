const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const user = require("./routes/user");
const logger = require("morgan");

async function Server() {
  try {
    app.use(cors({ origin: "*" }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    require("./models/database").connectDatabase()
    const session = require("express-session");
    const cookieparser = require("cookie-parser");

    app.use(
      session({
        resave: true,
        saveUninitialized: true,
        secret: process.env.EXPRESS_SESSION_SECRET,
      })
    );
    app.use(cookieparser());
    app.use(logger("tiny"));

    app.get("/" , (req,res)=>{
        res.send("Hello From Server")
    })
    app.use("/photo-web" , user)
    // Error Handling 
    app.use((err,req , res ,next)=>{
        console.error(err.stack)
        res.status(500).send(`Something Went Wrong ${err}`)
    })
    app.listen(PORT, ()=>{
        console.log("Zomato Backend Server Started")
    });
  } catch (error) {
    console.log("Error Starting Zomato Server", error);
  }
}
Server();
