import React from 'react'
import '../Student/Student.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function StudentSidebar() {

    const navigate = useNavigate();

    const logout = () => {
        toast.success("Logged Out Successfully!!!")
        navigate("/studentlogin")
    }
    return (
        <div>
            <div className='student-sidebar-back'>
                <div className='student-sidebar-link pt-5 ms-4'>
                    <a href='/studentdashboard' className='mt-4'>Dashboard</a>
                    <a href='/studentviewprofile' className='pt-3 mt-3'>Profile</a>
                    <a href='/studentbooklist' className='pt-3 mt-3'>Book List</a>
                    <a href='/studentmybook' className='pt-3 mt-3'>My Books</a>
                    {/* <a href='/studentbookreturn' className='pt-3 mt-3'>Book Return</a> */}
                    <a href='/studentnotification' className='pt-3 mt-3'>Notification</a>
                    <div className='pt-5 text-center'>
                        <button className='Student-sidebar-logoutbtn' onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSidebar
