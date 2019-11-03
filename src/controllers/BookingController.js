const Booking = require('../models/Booking');

module.exports = {
    async store(requisition, response){
        const { user_id } = requisition.headers;
        const { spot_id } = requisition.params; 
        const { date } = requisition.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date
        });

        await booking.populate('spot').populate('user').execPopulate();

        return response.json(booking);
    }
}