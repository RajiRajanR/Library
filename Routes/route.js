const express = require('express');
const router = express.Router();
const studentReg = require('../Controller/StudentController')
const staffreg = require('../Controller/StaffController')
const book = require('../Controller/BookController')
const bookreturn = require('../Controller/BookReturnController')
const bookborrow = require('../Controller/BookBorrowController')
const fine = require('../Controller/FineController')

// Student

router.post('/studentregister', studentReg.upload, studentReg.StudentRegister);
router.post('/studentlogin', studentReg.StudentLogin)
router.post('/viewallstudent', studentReg.viewAllStudent)
router.post('/viewastudent/:id', studentReg.ViewAStudent)
router.post('/updatestudentprofile/:id', studentReg.upload, studentReg.UpdateProfile)
router.post('/rejectstudentborrow/:id', studentReg.RejectStudentBorrow)


// Staff

router.post('/staffregister', staffreg.upload, staffreg.StaffRegister)
router.post('/stafflogin', staffreg.StaffLogin)
router.post('/viewallstaff', staffreg.ViewAllStaff)
router.post('/viewastaff/:id', staffreg.ViewAStaff)
router.post('/updatestaffprofile/:id', staffreg.upload, staffreg.UpdateProfile)
router.post('/rejectstaffborrow/:id', staffreg.RejectStaffBorrow)

// Book

router.post('/bookregister', book.upload, book.BookRegister);
router.post('/viewallbook', book.ViewAllBook);
router.post('/viewabook/:id', book.ViewABook);
router.post('/updatebook/:id', book.upload, book.UpdateBook);
router.post('/deletebook/:id', book.DeleteBook);

// Book Return

router.post('/bookreturn', bookreturn.BookReturn)
router.post('/studentbookreturn/:id', bookreturn.StudentBookReturn)
router.post('/studentreturnbook/:id', bookreturn.StudentReturnBook)


router.post('/staffbookreturn/:id', bookreturn.StaffBookReturn)
router.post('/staffreturnbook/:id', bookreturn.StaffReturnBook)

// Book Borrow

// Student
router.post('/studentbookborrow', bookborrow.StudentBookBorrow)
router.post('/studentviewaborrowbook/:id', bookborrow.StudentViewaBorrowbook)
router.post('/studentbookborrowaccept/:id', bookborrow.StudentBorrowBookAccept)
router.post('/studentbookborrowreject/:id', bookborrow.StudentBookBorrowReject)
router.post('/studentviewborrowbook', bookborrow.StudentViewBorrowbook)
router.post('/studentviewacceptallbook/:id', bookborrow.StudentViewAllBorrowbook)

// Staff
router.post('/staffbookborrow', bookborrow.StaffBookBorrow)
router.post('/staffviewaborrowbook/:id', bookborrow.StaffViewaBorrowbook)
router.post('/staffviewborrowbook', bookborrow.StaffViewBorrowbook)
router.post('/staffbookborrowaccept/:id', bookborrow.StaffBorrowBookAccept)
router.post('/staffbookborrowreject/:id', bookborrow.StaffBookBorrowReject)
router.post('/staffviewacceptallbook/:id', bookborrow.StaffViewAllBorrowbook)

// Fine

router.post('/studentfine',fine.StudentFinePay)
router.post('/studentviewfine/:id',fine.StudentViewFine)
router.post('/stafffine',fine.StaffFinePay)
router.post('/staffviewfine/:id',fine.StaffViewFine)
router.post('/studentpayupdate/:id',fine.StudentPayUpdate)
router.post('/staffpayupdate/:id',fine.StaffPayUpdate)



module.exports = router