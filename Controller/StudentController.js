const student = require('../Schema/StudentSchema');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage }).single("file");


const StudentRegister = (req, res) => {

    const stud = new student({
        fname: req.body.fname,
        lname: req.body.lname,
        studentId: req.body.studentId,
        gender: req.body.gender,
        email: req.body.email,
        department: req.body.department,
        contact: req.body.contact,
        password: req.body.password,
        profile: req.file
    })
    stud.save()
        .then((data) => {
            res.json({
                status: 200,
                msg: "Register Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Data Not Obtained",
                err: err
            })
        })
}


// Student Login

const StudentLogin = (req, res) => {
    const { email, password } = req.body;

    student.findOne({ email })
        .then((user) => {
            if (!user) {
                res.json({
                    status: 404,
                    msg: "USer not found"
                })
            }
            if (user.password !== password) {
                res.json({
                    status: 404,
                    msg: "Password Mismatch"
                })
            }
            res.json({
                status: 200,
                msg: "Login Successfully",
                data: user
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Something Went Wrong",
                err: err
            })
        })
}

// Viewall Student

const viewAllStudent = (req, res) => {
    student.find({})
        .then((result) => {
            res.json({
                status: 200,
                message: "find",
                data: result,
            });
        })
        .catch((err) => {
            res.json({
                status: 500,
                message: "No Students Fount",
                data: err,
            });
        });
};

// View A Student

const ViewAStudent = (req, res) => {
    const studentid = req.params.id;
    student.findById(studentid)
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
                msg: "Not Obtained",
                data: data
            })
        })
}

// Update Student Profile

const UpdateProfile = (req, res) => {
    const studentid = req.params.id; 

    let updateData = {
        fname: req.body.fname,
        lname: req.body.lname,
        studentId: req.body.studentId,
        gender: req.body.gender,
        email: req.body.email,
        department: req.body.department,
        contact: req.body.contact,
        password: req.body.password,
        profile: req.file
    }

    student.findByIdAndUpdate(studentid, updateData)
        .then((res) => {
            res.json({
                status:200,
                msg:"Student Updated Successfully",
                data:res
            })
        })
        .catch((err)=>{
            res.json({
                status:500,
                msg:"Failed to update Student",
                err:err
            })
        })
}


// Reject Student borrow book

const RejectStudentBorrow = (req, res) => {
    const studentid = req.params.id;

    student.findByIdAndDelete(studentid)
        .then((data) => {
            res.json({
                status: 200,
                msg: "Reject Student Borrow Book",
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
    StudentRegister,
    StudentLogin,
    viewAllStudent,
    ViewAStudent,
    UpdateProfile,
    RejectStudentBorrow,
    upload
}