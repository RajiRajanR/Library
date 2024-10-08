const BookBorrowSchema = require('../Schema/BookBorrowSchema');
const bookreturn = require('../Schema/BookReturnSchema');

// Book Return

const BookReturn = (req, res) => {

    const booksreturn = new bookreturn({
        studentId: req.body.studentId,
        studentName: req.body.studentName,
        status: req.body.status,
        bookId: req.body.bookId,
        bookTitle: req.body.bookTitle,
        bookCategory: req.body.bookCategory,
    })

    booksreturn.save()
        .then((data) => {
            res.json({
                status: 200,
                msg: "Return Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Book Return Error",
                err: err
            })
        })
}

// Student Book Return

const StudentBookReturn = (req, res) => {
    const id = req.params.id

    BookBorrowSchema.findById(id).populate('bId').populate('studentsId')
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

// Staff Book Return

const StaffBookReturn = (req, res) => {
    const id = req.params.id

    BookBorrowSchema.findById(id).populate('bId').populate('staffsId')
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


// Student Book Return 

const StudentReturnBook = (req, res) => {
    const id = req.params.id;
    
    BookBorrowSchema.findByIdAndDelete(id)
        .then((data) => {
            res.json({
                status: 200,
                msg: "Returned Successfully",
                data: data
            })
        })
        .catch((err) => {        
            console.log(err);
    
            res.json({
                status: 500,
                msg: "Not Returned Successfully",
                err: err
            })

        })
}

// Staff Book Return 

const StaffReturnBook = (req, res) => {
    const id = req.params.id;
    
    BookBorrowSchema.findByIdAndDelete(id)
        .then((data) => {
            res.json({
                status: 200,
                msg: "Returned Successfully",
                data: data
            })
        })
        .catch((err) => {        
            console.log(err);
    
            res.json({
                status: 500,
                msg: "Not Returned Successfully",
                err: err
            })

        })
}

module.exports = {
    BookReturn,
    StudentBookReturn,
    StudentReturnBook,
    StaffBookReturn,
    StaffReturnBook
}