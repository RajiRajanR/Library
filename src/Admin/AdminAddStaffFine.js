import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeftLong, FaLinkSlash } from 'react-icons/fa6'
import axios from 'axios';
import { toast } from 'react-toastify';

function AdminAddStaffFine() {

    const navigate = useNavigate();
    const staffid = localStorage.getItem("staffId")
    const { id } = useParams()

    const link = () => {
        navigate(-1)
    }

    const [data, setData] = useState({
        bId: id,
        fineAmount: "",
        staffsId: staffid,
        date: "",
        userRole: "staff"
    })

    const [errors, setErrors] = useState({
        fineAmount: "",
    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData, [name]: value
        }))
    }

    const validatefield = (fieldname, value) => {
        if (!value) {
            return `${fieldname} is required.`
        }
    }
    const handlesubmit = (e) => {

        e.preventDefault();
        console.log(data);
        let errors = {};


        errors.fineAmount = validatefield("FineAmount", data.fineAmount)

        setErrors(errors);

        axios.post('http://localhost:4098/stafffine', data)
            .then((res) => {
                toast.success("Fine Add Successfully!!!")
                console.log("Fine Add Successfully!!!", res);
                navigate('/adminviewstafflist')
            })
            .catch((err) => {
                toast.error("Error Occured")
                console.log("Error Occured", err);
            })
    }

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <AdminSidebar />
                </div>
                <div className='col-9'>
                    <div className='mt-5 ms-4'>
                        <Link className="text-dark" onClick={link}>
                            <FaArrowLeftLong />
                        </Link>
                    </div>
                    <div className='text-center mt-5'>
                        <h2>Fine</h2>
                    </div>
                    <div className='row'>
                        <div className='col'></div>
                        <div className='col'>
                            <div className='mt-5'>
                                <input type='text'
                                    placeholder='Amount'
                                    className='adminadd-stafffine-input ps-3'
                                    name='fineAmount'
                                    value={data.fineAmount}
                                    onChange={handlechange}
                                />
                                <div>
                                    {errors.fineAmount && <span className='text-danger ms-5'>{errors.fineAmount}</span>}
                                </div>
                            </div>
                            <div className='mt-5 text-center'>
                                <button className='adminadd-stafffine-submitbtn' onClick={handlesubmit}>Submit</button>
                            </div>
                        </div>
                        <div className='col'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddStaffFine
