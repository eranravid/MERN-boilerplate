const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    firstName: {
      type: String,
      default: ""
    },
    lastName: {
      type: String,
      default: ""
    },
    address: {
      type: String,
      default: ""
    },
    zipcode: {
      type: Number,
      default: 0
    },
    phoneNumber: {
      type: Number,
      default: 0
    },
    notes: {
      type: String,
      default: ""
    },
});

module.exports = mongoose.model('Order', OrderSchema);
