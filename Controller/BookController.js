const book = require('../Schema/BookSchema');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage }).single("file");

// Book Register

const BookRegister = (req, res) => {

    const books = new book({
        name: req.body.name,
        author: req.body.author,
        id: req.body.id,
        language: req.body.language,
        category: req.body.category,
        image: req.file
    })
    books.save()
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

// View All Books

const ViewAllBook = (req, res) => {
    book.find({})
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

// View A book

const ViewABook = (req, res) => {
    const bookid = req.params.id;
    book.findById(bookid)
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

// Update Book

const UpdateBook = (req, res) => {
    const bookid = req.params.id;

    let updateData = {
        name: req.body.name,
        author: req.body.author,
        id: req.body.id,
        language: req.body.language,
        category: req.body.category,
        image: req.file
    }

    book.findByIdAndUpdate(bookid, updateData)
        .then((data) => {
            res.json({
                status: 200,
                msg: "Book Updated Successfully",
                data: data
            })
        })
        .catch((err) => {
            console.log(err);
            
            res.json({
                status: 500,
                msg: "Failed to update Book",
                err: err
            })
        })
}

// Delete Book

const DeleteBook = (req, res) => {
    const bookid = req.params.id;

    book.findByIdAndDelete(bookid)
        .then((data) => {
            res.json({
                status: 200,
                msg: "Deleted Successfully",
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
    BookRegister,
    ViewAllBook,
    ViewABook,
    UpdateBook,
    DeleteBook,
    upload
}