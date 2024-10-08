import React, { useEffect, useState } from 'react'
import StudentSidebar from './StudentSidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

function StudentNotification() {

    const navigate = useNavigate();
    const [data, setData] = useState([])    

    const fines = (id) => {
        navigate('/studentfinepayment/' + id)
    }

    const id = localStorage.getItem("studentId")


    useEffect(() => {
        
        
        axios.post(`http://localhost:4098/studentviewfine/${id}`,)
            .then((res) => {
                console.log("View Successfully", res);
                setData(res.data.data)
            })
            .catch((err) => {
                toast.error("An Error Occured")
                console.log("An Error Occured", err);
            })
    }, [])

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <StudentSidebar />
                </div>
                <div className='col-9'>
                    <div className='text-center mt-5'>
                        <h2>Return & Fine Pay Books</h2>
                    </div>
                    <div className='row mt-5 ms-5'>
                        <hr></hr>
                        <div className='col'><b>Student ID</b></div>
                        <div className='col'><b>Student Name</b></div>
                        <div className='col'><b>Book ID</b></div>
                        <div className='col'><b>Book Name</b></div>
                        <div className='col'><b>Book Category</b></div>
                        <div className='col'><b>Borrow Date</b></div>
                        <div className='col'><b>Fine</b></div>
                        <div className='col'><b>Fine Pay</b></div>
                        <hr className='mt-3'></hr>
                    </div>
                    {console.log(data)
                    }
                    {data.map((fine) => (
                        <div className='row ms-5' >
                            <div className='col'>{fine?.studentsId?.studentId}</div>
                            <div className='col'>{fine?.studentsId?.fname} {data?.studentsId?.lname}</div>
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
                            <hr className='mt-3'></hr>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default StudentNotification
