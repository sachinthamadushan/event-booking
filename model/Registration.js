const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema(
    {
      user_name : String,
      event_id : {type: mongoose.Schema.Types.ObjectId, 
        ref: 'Event'},
      registration_date: {type: Date, default: Date.now}  
    }
);
module.exports = mongoose.model('Registration',registrationSchema);