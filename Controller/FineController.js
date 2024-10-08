const fine = require('../Schema/FineSchema');

// Student Fine PAyment

const StudentFinePay = (req, res) => {
    const currentDate = new Date();

    const studentfine = new fine({
        bId: req.body.bId,
        studentsId: req.body.studentsId,
        date: currentDate,
        userRole: req.body.userRole,
        fineAmount: req.body.fineAmount
    })
    studentfine.save()
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

// Staff Fine PAyment

const StaffFinePay = (req, res) => {
    const currentDate = new Date();

    const studentfine = new fine({
        bId: req.body.bId,
        staffsId: req.body.staffsId,
        date: currentDate,
        userRole: req.body.userRole,
        fineAmount: req.body.fineAmount
    })
    studentfine.save()
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

// Student View Fine Payment

const StudentViewFine = (req, res) => {
    fine.find({studentsId: req.params.id }).populate('studentsId').populate('bId')
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

// Student View Fine Payment

const StaffViewFine = (req, res) => {
    fine.find({staffsId: req.params.id }).populate('staffsId').populate('bId')
        .then((data) => {
            console.log(data);
            
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

// Student PAyment Update

const StudentPayUpdate = (req, res) => {
    fine.findByIdAndUpdate(
        { _id: req.params.id },
        { isActive: true, fineAmount: req.body.fineAmount },
        { new: true }
    )
    .then((data) => {
        res.json({
            status: 200,
            msg: "Updated Successfully",
            data: data,
        });
    })
    .catch((err) => {
        res.json({
            status: 500,
            msg: "Data Not Inserted",
            err: err,
        });
    });
}


// Staff Payment Update

const StaffPayUpdate = (req, res) => {
    fine.findByIdAndUpdate(
        { _id: req.params.id },
        { isActive: true, fineAmount: req.body.fineAmount },
        { new: true }
    )
    .then((data) => {
        res.json({
            status: 200,
            msg: "Updated Successfully",
            data: data,
        });
    })
    .catch((err) => {
        res.json({
            status: 500,
            msg: "Data Not Inserted",
            err: err,
        });
    });
};



module.exports = {
    StudentFinePay,
    StaffFinePay,
    StudentViewFine,
    StaffViewFine,
    StudentPayUpdate,
    StaffPayUpdate
}