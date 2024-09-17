const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    name: String,
    type: String, // e.g., individual, cooperative
    requirements: [String], // e.g., organic, non-GMO
    state: String,
    district: String,
    village: String,

});

module.exports = mongoose.model('Buyer', buyerSchema);
