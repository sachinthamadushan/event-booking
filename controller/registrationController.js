const Regidtration = require('../model/Registration');
const Event = require('../model/Event');

const createRegistration = async (req, res) => {
    try {

        const event = await Event.findById(req.body.event_id);   //findById == event_id eka thiyed balai(ona de hoyala dei)

        if(!event || event.available_seats <= 0){
            return res.status(400).json({
                'error':'Event not available or no seats available'
            });
        }

        let registration = new Regidtration({
            user_name: req.body.user_name,
            event_id: req.body.event_id
        });

        event.available_seats = event.available_seats - 1;
        
       await event.save();
       await registration.save()
        .then((result)=>{
            res.status(200).json({
                'msg':'Registraton Create'
            })
        }) 
        .catch((error)=>{res.status(500).json({'error':error})
    });
    } catch (error) {
       res.status(500).json({'error':error}); 
    }
}

module.exports = {createRegistration}