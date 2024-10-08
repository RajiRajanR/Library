const staff = require('../Schema/StaffSchema');
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

const StaffRegister = (req, res) => {

    const staffs = new staff({
        fname: req.body.fname,
        lname: req.body.lname,
        staffId: req.body.staffId,
        gender: req.body.gender,
        email: req.body.email,
        department: req.body.department,
        contact: req.body.contact,
        password: req.body.password,
        profile: req.file
    })
    staffs.save()
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

// staff Login

const StaffLogin = (req, res) => {
    const { email, password } = req.body;

    staff.findOne({ email })
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
            console.log(err);
            res.json({
                status: 500,
                msg: "Something Went Wrong",
                err: err
            })
        })
}

// Viewall Staff

const ViewAllStaff = (req, res) => {
    staff.find({})
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

// View A Staff

const ViewAStaff = (req, res) => {
    const staffid = req.params.id;
    staff.findById(staffid)
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
                err: err
            })
        })
}

// Update Staff Profile

const UpdateProfile = (req, res) => {
    const staffid = req.params.id;

    let updateData = {
        fname: req.body.fname,
        lname: req.body.lname,
        staffId: req.body.staffId,
        gender: req.body.gender,
        email: req.body.email,
        department: req.body.department,
        contact: req.body.contact,
        password: req.body.password,
        profile: req.file
    }

    staff.findByIdAndUpdate(staffid, updateData)
        .then((data) => {
            res.json({
                status: 200,
                msg: "Student Updated Successfully",
                data: data
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: "Failed to update Student",
                err: err
            })
        })
}

// Reject Staff borrow book

const RejectStaffBorrow = (req, res) => {
    const staffid = req.params.id;

    staff.findByIdAndDelete(staffid)
        .then((data) => {
            res.json({
                status: 200,
                msg: "Reject Staff Borrow Book",
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
    StaffRegister,
    StaffLogin,
    ViewAllStaff,
    ViewAStaff,
    UpdateProfile,
    RejectStaffBorrow,
    upload
}