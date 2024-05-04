const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact")
const Booking = require("../models/Booking")
const Service = require("../models/Service")


// Booking Route 
router.post("/booking", async (req, res) => {
    console.log(req.body)
    const bookings = await new Booking(req.body).save();
    console.log(bookings)
    res.json({message:"New Booking Added in Database"})
    });

// Join Us Route
router.post("/join-us", async (req, res) => {
const contactingUser = await new Contact(req.body).save();
console.log(contactingUser)
res.json({message:"Join Us User Added in Database"})
});

// Book Service According to Category 
router.post("/book-service", async (req, res) => {
    const serviceBooked = await new Service(req.body).save();
    console.log(serviceBooked)
    res.json({message:"New Service Booking Done !"})
    });
module.exports = router;


