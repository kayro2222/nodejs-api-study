const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    technologies: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        referency: 'User'
    }
});

module.exports = mongoose.model('Spot', SpotSchema);