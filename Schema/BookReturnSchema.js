var mongoose = require('mongoose');
const bookreturn = new mongoose.Schema
    ({
        // studentId: {
        //     type: Number,
        //     required: true,
        // },
        // studentName: {
        //     type: String,
        //     required: true,
        // },
        // status: {
        //     type: String,
        //     required: true,
        // },
        // bookId: {
        //     type: Number,
        //     required: true,
        // },
        // bookTitle: {
        //     type: String,
        //     required: true,
        // },
        // bookCategory: {
        //     type: String,
        //     required: true,
        // },

        bId:{
            type:mongoose.Types.ObjectId,
            required:true,
            ref:'BookRegister'
        },
        studentId:{
            type:mongoose.Types.ObjectId,
            required:true,
            ref:'StudentRegister'
        },
        staffId:{
            type:mongoose.Types.ObjectId,
            required:true,
            ref:'StaffRegister'
        }
    })

module.exports = new mongoose.model('BookReturn', bookreturn)