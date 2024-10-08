var mongoose = require('mongoose');
const staff = new mongoose.Schema
    ({
        fname: {
            type: String,
            required: true,
        },
        lname: {
            type: String,
            required: true,
        },
        staffId: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        contact: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        profile: {
            type: Object,
            required: true,
        }
    })

module.exports = new mongoose.model('StaffRegister', staff)