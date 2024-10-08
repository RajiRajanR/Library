import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StaffSidebar from './StaffSidebar';
import axios from 'axios';
import { toast } from 'react-toastify';

function StaffNotification() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const staffId = localStorage.getItem("staffId");

    const fines = (id) => {
        navigate('/stafffinepayment/' + id);
    };

    useEffect(() => {
        if (staffId) {
            axios.post(`http://localhost:4098/staffviewfine/${staffId}`)
                .then((res) => {
                    console.log("View Successfully", res);
                        setData(res.data.data);
                })
                .catch((err) => {
                    toast.error("An Error Occurred");
                    console.log("An Error Occurred", err);
                });
        } else {
            toast.error("Staff ID not found");
        }
    }, [staffId]); // Added staffId as a dependency

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <StaffSidebar />
                </div>
                <div className='col-9'>
                    <div className='text-center mt-5'>
                        <h2>Return & Fine Pay Books</h2>
                    </div>
                    <div className='row mt-5 ms-5'>
                        <hr />
                        <div className='col'><b>Staff ID</b></div>
                        <div className='col'><b>Staff Name</b></div>
                        <div className='col'><b>Book ID</b></div>
                        <div className='col'><b>Book Name</b></div>
                        <div className='col'><b>Book Category</b></div>
                        <div className='col'><b>Borrow Date</b></div>
                        <div className='col'><b>Fine</b></div>
                        <div className='col'><b>Fine Pay</b></div>
                        <hr className='mt-3' />
                    </div>
                    {console.log(data)
                    }
                 {data.map((fine) => (
                            <div className='row ms-5' >
                                <div className='col'>{fine?.staffsId?.staffId}</div>
                                <div className='col'>{fine?.staffsId?.fname} {fine?.staffsId?.lname}</div>
                                <div className='col'>{fine?.bId?.id}</div>
                                <div className='col'>{fine?.bId?.name}</div>
                                <div className='col'>{fine?.bId?.category}</div>
                                <div className='col text-success'>{fine?.date}</div> 
                                <div className='col text-danger'>{fine?.fineAmount}</div>
                                <div className='col'>
                                    {fine.isActive ? (
                                        <span className="text-success">Paid</span>
                                    ) : (
                                        <button className='staff-notification-finetbtn' onClick={() => fines(fine._id)}>Pay</button>
                                    )}
                                </div>
                                <hr className='mt-3' />
                            </div>
                        ))} 
                </div>
            </div>
        </div>
    );
}

export default StaffNotification;
