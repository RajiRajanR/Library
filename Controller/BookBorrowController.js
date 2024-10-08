const bookborrow = require('../Schema/BookBorrowSchema')


// Student Book Borrow

const StudentBookBorrow = (req, res) => {

    const currentDate = new Date();

    const borrowbook = new bookborrow({
        bId: req.body.bId,
        studentsId: req.body.studentsId,
        date: currentDate,
        userRole: req.body.userRole,
        isActive: req.body.isActive,
        adminApproved: req.body.adminApproved,
    })
    borrowbook.save()
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

// Staff Book Borrow

const StaffBookBorrow = (req, res) => {

    const currentDate = new Date();

    const borrowbook = new bookborrow({
        bId: req.body.bId,
        staffsId: req.body.staffsId,
        date: currentDate,
        userRole: req.body.userRole,
        isActive: req.body.isActive,
        adminApproved: req.body.adminApproved,
    })
    borrowbook.save()
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

//Staff View All Book

const StaffViewBorrowbook = (req, res) => {
    bookborrow.find({ userRole: 'staff', adminApproved: false }).populate('staffsId').populate('bId')
        .then((data) => {
            res.json({
                status: 200,
                msg: "View Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Not data Obtained",
                err: err
            })
        })
}

//Student View All Book

const StudentViewBorrowbook = (req, res) => {

    bookborrow.find({ userRole: 'student', adminApproved: false }).populate('studentsId').populate('bId')
        .then((data) => {
            res.json({
                status: 200,
                msg: "View Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Not data Obtained",
                err: err
            })
        })
}

//Staff Accept Student ViewAll Book

const StudentViewAllBorrowbook = (req, res) => {

    bookborrow.find({ userRole: 'student', adminApproved: true, studentsId: req.params.id }).populate('studentsId').populate('bId')
        .then((data) => {
            res.json({
                status: 200,
                msg: "View Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Not data Obtained",
                err: err
            })
        })
}

// Admin Accept Staff Books View All Staff Books

const StaffViewAllBorrowbook = (req, res) => {

    bookborrow.find({ userRole: 'staff', adminApproved: true, staffsId: req.params.id }).populate('studentsId').populate('bId')
        .then((data) => {
            res.json({
                status: 200,
                msg: "View Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Not data Obtained",
                err: err
            })
        })
}


//Student View a Book


const StudentViewaBorrowbook = (req, res) => {
    const bookid = req.params.id;

    bookborrow.findById(bookid).populate('bId').populate('studentsId')
        .then((data) => {
            res.json({
                status: 200,
                msg: "View Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Not data Obtained",
                err: err
            })
        })
}


// Staff View a Book

const StaffViewaBorrowbook = (req, res) => {
    const bookid = req.params.id;

    bookborrow.findById(bookid).populate('bId').populate('staffsId')
        .then((data) => {
            res.json({
                status: 200,
                msg: "View Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Not data Obtained",
                err: err
            })
        })
}

// Staff Book Borrow Accept

const StaffBorrowBookAccept = (req, res) => {
    bookborrow.findByIdAndUpdate({ _id: req.params.id }, { adminApproved: true, isActive: true })
        .exec()
        .then((data) => {
            res.json({
                status: 200,
                msg: "Activated Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 200,
                msg: "Data Not Obtained",
                err: err
            })
        })
}

// Student Book Borrow Accept

const StudentBorrowBookAccept = (req, res) => {

    bookborrow.findByIdAndUpdate({ _id: req.params.id }, { adminApproved: true })
        .exec()
        .then((data) => {
            res.json({
                status: 200,
                msg: "Activated Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 200,
                msg: "Data Not Obtained",
                err: err
            })
        })
}

// Student Book Borrow Reject

const StudentBookBorrowReject = (req, res) => {
    const id = req.params.id

    bookborrow.findByIdAndDelete(id)
        .then((data) => {
            res.json({
                status: 200,
                msg: "Rejected Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Not Obtained",
                err: err
            })
        })
}


// Student Book Borrow Reject

const StaffBookBorrowReject = (req, res) => {
    const id = req.params.id

    bookborrow.findByIdAndDelete(id)
        .then((data) => {
            res.json({
                status: 200,
                msg: "Rejected Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Not Obtained",
                err: err
            })
        })
}


module.exports = {
    StudentBookBorrow,
    StaffBookBorrow,
    StaffViewBorrowbook,
    StudentViewBorrowbook,
    StudentViewaBorrowbook,
    StaffViewaBorrowbook,
    StaffBorrowBookAccept,
    StudentBorrowBookAccept,
    StudentBookBorrowReject,
    StaffBookBorrowReject,
    StudentViewAllBorrowbook,
    StaffViewAllBorrowbook
}