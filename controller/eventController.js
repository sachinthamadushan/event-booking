const Event = require('../model/Event');

const createEvent = async (req,res)=>{
    try {
        let event = new Event({
            name:req.body.name,
            date:req.body.date,
            location:req.body.location,
            available_seats:req.body.available_seats
        });
        event.save()
        .then((result)=>{
            res.status(200).json({
                'msg':'Event Created',
                result
            })
        })
        .catch((error)=>{
            res.status(500).json({'error':error});
        });
        
    } catch (error) {
        res.status(500).json({'error-try':error});
    }
}

const getAllEvents = async (req,res)=>{
    try {
        const events = await Event.find();
        res.status(200).json({
            success:true,
            events
        })
    } catch (error) {
        res.status(500).json({'error':error});
    }
} 

module.exports = {createEvent,getAllEvents};