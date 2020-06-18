const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: String,
    teaser: String,
    body: String,
    status: {
        type: Number,
        default: 1
    },
    created: {
        type: Date,
        required: true,
        default: new Date()
    }
});

mongoose.model('News', newsSchema);

module.exports = mongoose.model('News');