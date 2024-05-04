const mongoose = require("mongoose");

const contactModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
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
      subject: {
        type: String,
        required: [true, "Subject is required!"],
      },
      message: {
        type: String,
        required: [true, "Message is required!"],
      },

})

const Contact = mongoose.model('contact' , contactModel)
module.exports = Contact