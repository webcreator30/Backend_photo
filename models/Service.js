const mongoose = require('mongoose')

const service = new mongoose.Schema({

    category: {
        type: String,
        required: [true, "Category is required!"],
      },
      description: {
        type: String,
        required: [true, "Description is required!"],
      },
      budget: {
        type: Number,
        required: [true, "Budget is required!"],
      },
     services: {
        type: String,
        required: [true, "Services is required!"],
      },
      days: {
        type: Number,
        required: [true, "Number of Days is required!"],
      },
      time: {
        type: String,
        required: [true, "Time is required!"],
      },
      location: {
        type: String,
        required: [true, "Location is required!"],
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
})

const Service = mongoose.model('booked-services' , service)
module.exports = Service