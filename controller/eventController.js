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

const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Event deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {createEvent,getAllEvents, updateEvent, deleteEvent};