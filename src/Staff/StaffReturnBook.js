import React, { useEffect, useState } from 'react'
import StaffSidebar from './StaffSidebar'
import '../Staff/Staff.css'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaArrowLeftLong } from 'react-icons/fa6';

function StaffReturnBook() {

    const staffId = localStorage.getItem("staffId");
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        id: "",
        name: '',
        staffsId: staffId
    });

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.post(`http://localhost:4098/staffbookreturn/${id}`)
            .then((res) => {
                console.log("View Successfully", res);
                setData(res.data.data)
            })
            .catch((err) => {
                toast.error("Error Occured")
                console.log("Error Occured", err);

            })
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:4098/staffreturnbook/${id}`)
            .then((res) => {
                toast.success("Book Returned Successfully")
                console.log("Book Returned Successfully", res);
                navigate('/staffmybook')
                getData();
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
                    <StaffSidebar />
                </div>
                <div className='col-9'>
                    <div className='mt-5 ms-2'>
                        <Link className="text-dark" to="/staffmybook">
                            <FaArrowLeftLong />
                        </Link>
                    </div>
                    <div className='text-center mt-5 pt-3'>
                        <h2>Return Book</h2>
                    </div>
                    <div className='row pt-5'>
                        <div className='col'>
                            <div>
                                <input type='text'
                                    placeholder={data?.staffsId?.staffId}
                                    className='ms-5 ps-3 staff-reg-input'
                                ></input>
                            </div>
                            <div>
                                <input type='text'
                                    placeholder={data?.staffsId?.fname}
                                    className='ms-5 ps-3 mt-5 staff-reg-input'
                                ></input>
                            </div>
                            <div>
                                <input type='text'
                                    placeholder={data?.staffsId?.department}
                                    className='ms-5 mt-5 ps-3 staff-reg-input'
                                ></input>
                            </div>
                        </div>
                        <div className='col'>
                            <div>
                                <input type='number'
                                    placeholder={data?.bId?.id}
                                    className='ms-5 ps-3  staff-reg-input'
                                ></input>
                            </div>
                            <div>
                                <input type='text'
                                    placeholder={data?.bId?.name}
                                    className='ms-5 mt-5 ps-3 staff-reg-input'
                                ></input>
                            </div>
                            <div>
                                <input type='text'
                                    placeholder={data?.bId?.category}
                                    className='ms-5 mt-5 ps-3 staff-reg-input'
                                ></input>
                            </div>
                        </div>
                        <div className='mt-5 text-center'>
                            <button className='staff-book-borrow-submitbtn' onClick={handlesubmit} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffReturnBook
