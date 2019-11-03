const Spot = require('../models/Spot');

module.exports = {
    async show(requisition, response){
        const { user_id } = requisition.headers;

        const spots = await Spot.find({
            user: user_id
        });

        return response.json(spots);
    }
}