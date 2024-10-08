import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import StaffSidebar from '../Staff/StaffSidebar'

function AdminViewStudentList({url}) {

    const navigate=useNavigate();
    const [student, setStudent] = useState([])

    const viewbook=(studentId)=>{
        navigate('/staffviewstudentbook/'+studentId)
    }

    useEffect(() => {
        axios.post("http://localhost:4098/viewallstudent")
            .then((res) => {
                console.log("View Successfully", res);
                if (res.status === 200) {
                    setStudent(res.data.data) 
                }
            })
            .catch((err) => {
                console.error("Failed to fetch Employees:", err);
                toast.error("Failed to fetch Employees. Please try again later.");
            })
    }, [])
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <StaffSidebar />
                </div>
                <div className='col-9 pt-3 ms-4'>
                <div className=' text-center'>
                        <h2>Student List</h2>
                    </div>
                    <div className='row adminview-stafflist-header mt-5'>
                        <div className='col'>Profile</div>
                        <div className='col'>Name</div>
                        <div className='col'>Sudent Id</div>
                        <div className='col'>Gender</div>
                        <div className='col'>Department</div>
                        <div className='col'>Email</div>
                        <div className='col'>Contact</div>
                        <div className='col'>Books</div>
                    </div>
                    {student.map((student) => (
                        <div className='row pt-4 '>
                            <div className='col'>
                                <img src={`${url}/${student.profile.filename}`} 
                                className='adminview-stafflist-img' />
                            </div>
                            <div className='col'>{student.fname} {student.lname}</div>
                            <div className='col'>{student.studentId}</div>
                            <div className='col'>{student.gender}</div>
                            <div className='col'>{student.department}</div>
                            <div className='col'>{student.email}</div>
                            <div className='col'>{student.contact}</div>
                            <div className='col'>
                                <button className='adminview-stafflist-viewbtn' onClick={()=>viewbook(student._id)}>View</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default AdminViewStudentList
