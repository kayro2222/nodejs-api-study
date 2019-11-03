const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    async index(requisition, response){
        const { technology } = requisition.query;

        const spots = await Spot.find({ technologies: technology });

        return response.json(spots);
    },

    async store(requisition, response){
        const { filename } = requisition.file;
        const { company, price, technologies } = requisition.body;
        const { user_id } = requisition.headers;

        const user = await User.findById(user_id);

        if(!user){
            return response.status(400).json({
                error: 'User does not exists'
            });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            technologies: technologies.split(',').map(technologies => technologies.trim()),
            price
        })


        return response.json(spot);
    }
}