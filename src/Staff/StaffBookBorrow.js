import React, { useState } from 'react'
import StaffSidebar from './StaffSidebar'
import '../Staff/Staff.css'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
function StaffBookBorrow() {

    const [data, setData] = useState({
        staffId: "",
        staffName: "",
        status: "",
        bookId: "",
        bookTitle: "",
        bookCategory: ""
    })

    const [errors, setErrors] = useState({
        staffId: "",
        staffName: "",
        status: "",
        bookId: "",
        bookTitle: "",
        bookCategory: ""
    })

    const validatefield = (fieldname, value) => {
        if (!value) {
            return `${fieldname} is required.`
        }
    }

    const handlechange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData, [name]: value
        }))
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let errors = {};
        let formIsValid = true;

        errors.staffId = validatefield("Staff Id", data.staffId);
        errors.staffName = validatefield("Staff Name", data.staffName);
        errors.status = validatefield("Status", data.status);
        errors.bookId = validatefield("Book Id", data.bookId);
        errors.bookTitle = validatefield("Book Title", data.bookTitle);
        errors.bookCategory = validatefield("Book Category", data.bookCategory);

        setErrors(errors);
    }


    return (
        <div>
            <div>
                <div className='row'>
                    <div className='col-2'>
                        <StaffSidebar />
                    </div>
                    <div className='col-9'>
                        <div className='ms-5 mt-5'>
                            <Link className="text-dark w-100" to="/staffbooklist">
                                <FaArrowLeftLong />
                            </Link>
                        </div>
                        <div className='text-center mt-3'>
                            <h2>Borrow Book Form</h2>
                            <div className='row pt-5'>
                                <div className='col'>
                                    <div>
                                        <input type='number'
                                            placeholder='Staff ID'
                                            className='ms-5 ps-3 staff-reg-input'
                                            name='staffId'
                                            value={data.staffId}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.staffId && <span className='text-danger'>{errors.staffId}</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <input type='text'
                                            placeholder='Staff Name'
                                            className='ms-5 ps-3 mt-5 staff-reg-input'
                                            name='staffName'
                                            value={data.staffName}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.staffName && <span className='text-danger'>{errors.staffName}</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <input type='text'
                                            placeholder='Status'
                                            className='ms-5 mt-5 ps-3 staff-reg-input'
                                            name='status'
                                            value={data.status}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.status && <span className='text-danger'>{errors.status}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div>
                                        <input type='number'
                                            placeholder='Book ID'
                                            className='ms-5 ps-3  staff-reg-input'
                                            name='bookId'
                                            value={data.bookId}
                                            onChange={handlechange} disabled
                                        ></input>
                                        <div>
                                            {errors.bookId && <span className='text-danger'>{errors.bookId}</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <input type='text'
                                            placeholder='Book Name'
                                            className='ms-5 mt-5 ps-3 staff-reg-input'
                                            name='bookTitle'
                                            value={data.bookTitle}
                                            onChange={handlechange} disabled
                                        ></input>
                                        <div>
                                            {errors.bookTitle && <span className='text-danger'>{errors.bookTitle}</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <input type='text'
                                            placeholder='Book Category'
                                            className='ms-5 mt-5 ps-3 staff-reg-input'
                                            name='bookCategory'
                                            value={data.bookCategory}
                                            onChange={handlechange} disabled
                                        ></input>
                                        <div>
                                            {errors.bookCategory && <span className='text-danger'>{errors.bookCategory}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <button className='staff-book-borrow-submitbtn' onClick={handlesubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffBookBorrow
