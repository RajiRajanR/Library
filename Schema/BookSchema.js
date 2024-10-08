var mongoose = require('mongoose');
const book = new mongoose.Schema
    ({
        name: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        image: {
            type: Object,
            required: true,
        }
    })

module.exports = new mongoose.model('BookRegister', book)