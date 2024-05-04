const mongoose = require("mongoose")

const bookingForm = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Fullname is required!"],
      },
      email: {
        type: String,
        unique: true,
        required: [true, "Email is required!"],
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please provide a valid email address",
        ],
      },
      contact: {
        type: Number,
        required: [true, "Number is required!"],
      },
      date: {
        type: String,
        required: [true, "Date is required!"],
      },
     time: {
        type: String,
        required: [true, "Date is required!"],
      },

})

const Booking = mongoose.model('booking' , bookingForm)
module.exports = Booking;