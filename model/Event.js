const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        name:{type: String, required: true},
        date:{type: String, required: true},
        location:{type: String, required: true},
        available_seats:{type: Number, required: true},
    }
);
module.exports = mongoose.model('Event',eventSchema);