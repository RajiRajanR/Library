import React, { useState } from 'react'
import StaffSidebar from './StaffSidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import axios from 'axios';
import { toast } from 'react-toastify';

function StaffAddStudentFine() {

    const navigate = useNavigate();
    const studentid = localStorage.getItem("studentId")
    const { id } = useParams()

    const link = () => {
        navigate(-1)
    }

    const [data, setData] = useState({
        bId: id,
        fineAmount: "",
        studentsId: studentid,
        date: "",
        userRole: "student"
    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData, [name]: value
        }))
    }

    const handlesubmit = (e) => {

        e.preventDefault();
        console.log(data);

        axios.post('http://localhost:4098/studentfine', data)
            .then((res) => {
                toast.success("Fine Add Successfully!!!")
                console.log("Fine Add Successfully!!!", res);
                navigate('/adminviewstudentlist')
            })
            .catch((err) => {
                toast.error("Error Occured")
                console.log("Error Occured", err);
            })
    }
    return (
        <div>
            <div>
                <div className='row'>
                    <div className='col-2'>
                        <StaffSidebar />
                    </div>
                    <div className='col-9'>
                        <div className='mt-5 ms-5'>
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
                                        placeholder='FineAmount'
                                        className='adminadd-stafffine-input ps-3'
                                        name='fineAmount'
                                        value={data.fineAmount}
                                        onChange={handlechange}
                                    />
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
        </div>
    )
}

export default StaffAddStudentFine
