import React, { useEffect, useState } from 'react';
import StudentSidebar from './StudentSidebar';
import '../Staff/Staff.css';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import axios from 'axios';

function StudentBookBorrow() {
    const [studentData, setStudentData] = useState({
        studentId: "",
        studentName: "",
        status: "",
        startDate: "",
        endDate: ""
    });

    const [bookData, setBookData] = useState({
        bookId: "",
        bookTitle: "",
        bookCategory: ""
    });

    const [errors, setErrors] = useState({
        studentId: "",
        studentName: "",
        status: "",
        bookId: "",
        bookTitle: "",
        bookCategory: "",
        startDate: "",
        endDate: ""
    });

    const validateField = (fieldname, value) => {
        if (!value) {
            return `${fieldname} is required.`;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData((prevData) => ({
            ...prevData, [name]: value
        }));
    };

    const { id } = useParams();

    useEffect(() => {
        axios.post(`http://localhost:4098/viewabook/${id}`)
            .then((res) => {
                console.log("View Successfully", res);
                setBookData(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        let formIsValid = true;

        // Validate all fields
        Object.keys(studentData).forEach((key) => {
            const error = validateField(key.charAt(0).toUpperCase() + key.slice(1), studentData[key]);
            if (error) {
                errors[key] = error;
                formIsValid = false;
            }
        });

        setErrors(errors);

        if (formIsValid) {
            // Submit form logic (e.g., another API call)
            console.log("Form submitted successfully", studentData);
        }
    };

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <StudentSidebar />
                </div>
                <div className='col-9'>
                    <div className='mt-5 ms-3'>
                        <Link className="text-dark w-100 " to="/studentbooklist">
                            <FaArrowLeftLong />
                        </Link>
                    </div>
                    <div className='text-center mt-3'>
                        <h2>Borrow Book Form</h2>
                        <div className='row pt-5'>

                            <div className='col'>
                                <div>
                                    <input type='number'
                                        placeholder='Student ID'
                                        className='ms-5 ps-3 staff-reg-input2'
                                        name='studentId'
                                        value={studentData.studentId}
                                        onChange={handleChange}
                                    />
                                    <div>
                                        {errors.studentId && <span className='text-danger'>{errors.studentId}</span>}
                                    </div>
                                </div>
                                <div>
                                    <input type='text'
                                        placeholder='Student Name'
                                        className='ms-5 ps-3 mt-5 staff-reg-input2'
                                        name='studentName'
                                        value={studentData.studentName}
                                        onChange={handleChange}
                                    />
                                    <div>
                                        {errors.studentName && <span className='text-danger'>{errors.studentName}</span>}
                                    </div>
                                </div>
                                <div>
                                    <input type='text'
                                        placeholder='Status'
                                        className='ms-5 mt-5 ps-3 staff-reg-input2'
                                        name='status'
                                        value={studentData.status}
                                        onChange={handleChange}
                                    />
                                    <div>
                                        {errors.status && <span className='text-danger'>{errors.status}</span>}
                                    </div>
                                </div>
                                <div>
                                    <input type='date'
                                        className='ms-5 mt-5 ps-3 staff-reg-input2'
                                        name='startDate'
                                        value={studentData.startDate}
                                        onChange={handleChange}
                                    />
                                    <div>
                                        {errors.startDate && <span className='text-danger'>{errors.startDate}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div>
                                    <input type='number'
                                        // placeholder='Book ID'
                                        className='ms-5 ps-3  staff-reg-input'
                                        name='bookId'
                                        value={bookData.id}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <input type='text'
                                        // placeholder='Book Name'
                                        className='ms-5 mt-5 ps-3 staff-reg-input'
                                        name='bookTitle'
                                        value={bookData?.name}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <input type='text'
                                        // placeholder='Book Category'
                                        className='ms-5 mt-5 ps-3 staff-reg-input'
                                        name='bookCategory'
                                        value={bookData?.category}
                                        disabled
                                    />
                                    <div>
                                        {errors.bookCategory && <span className='text-danger'>{errors.bookCategory}</span>}
                                    </div>
                                </div>
                                <div>
                                    <input type='date'
                                        className='ms-5 mt-5 ps-3 staff-reg-input'
                                        name='endDate'
                                        value={studentData.endDate}
                                        onChange={handleChange}
                                    />
                                    <div>
                                        {errors.endDate && <span className='text-danger'>{errors.endDate}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <button className='staff-book-borrow-submitbtn' onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentBookBorrow;
