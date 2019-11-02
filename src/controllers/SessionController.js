const User = require('../models/User');
// index, show, store, update, destroy

module.exports = {
    async store(requisition, response){
        const { email }  = requisition.body;

        let user = await User.findOne({ 
            email: email
        });

        if(!user){
            user = await User.create({
                email
            });
        }

        return response.json(user);
    }
};