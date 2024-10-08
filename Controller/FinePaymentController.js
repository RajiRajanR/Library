const finepayment = require('../Schema/FinePaymentSchema');


// Student

const StudentFinepay = (req, res) => {
    const studentpay = new finepayment({
        cardNo: req.body.cardNo,
        cardName: req.body.cardName,
        fineAmount: req.body.fineAmount,
        studentsId: req.body.studentsId,
        bId: req.body.bId
    })
    studentpay.save()
        .then((data) => {
            res.json({
                status: 200,
                msg: "Added Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Data Not Inserted",
                err: err
            })
        })
}

// Staff

const StaffFinepay = (req, res) => {
    const studentpay = new finepayment({
        cardNo: req.body.cardNo,
        cardName: req.body.cardName,
        fineAmount: req.body.fineAmount
    })
    studentpay.save()
        .then((data) => {
            res.json({
                status: 200,
                msg: "Added Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Data Not Inserted",
                err: err
            })
        })
}

// // Staff PAyment Update

// const StaffPayUpdate = (req, res) => {
//     finepayment.findByIdAndUpdate()
//         .then((data) => {
//             res.json({
//                 status: 200,
//                 msg: "Updated Successfully",
//                 data: data
//             })
//         })
//         .catch((err) => {
//             res.json({
//                 status: 500,
//                 msg: "Data Not Inserted",
//                 err: err
//             })
//         })
// }

// Student PAyment Update

// const StudentPayUpdate = (req, res) => {
//     finepayment.findByIdAndUpdate()
//         .then((data) => {
//             res.json({
//                 status: 200,
//                 msg: "Updated Successfully",
//                 data: data
//             })
//         })
//         .catch((err) => {
//             res.json({
//                 status: 500,
//                 msg: "Data Not Inserted",
//                 err: err
//             })
//         })
// }

module.exports = {
    StudentFinepay,
    StaffFinepay,
    // StaffPayUpdate,
    // StudentPayUpdate
}