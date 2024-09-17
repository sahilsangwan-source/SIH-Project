const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    name: String,
    phoneNo: String,
    crops: [String],
    state: String,
    district: String,
    village: String,
})

module.exports = mongoose.model('Farmer', farmerSchema);