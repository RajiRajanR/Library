var mongoose = require('mongoose');
const book = new mongoose.Schema
    ({
        bId: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref:'BookRegister'
        },
        studentsId: {
            type: mongoose.Types.ObjectId,
            ref:'StudentRegister'
        },
        staffsId: {
            type: mongoose.Types.ObjectId,
            ref:'StaffRegister'
        },
        date: {
            type: Date,
            required: true,
        },
        userRole: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: true
        },
        adminApproved: {
            type: Boolean,
            default: false
        }
    })

module.exports = new mongoose.model('BorrowBook', book)