// models/user.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNo: { type: String, required: true },
    password: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true }
});


module.exports = mongoose.model('User', UserSchema);
