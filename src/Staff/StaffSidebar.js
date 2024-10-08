import React from 'react'
import '../Staff/Staff.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function StaffSidebar() {

    const navigate = useNavigate();

    const logout = () => {
        toast.success("Logged Out Successfully!!!")
        navigate("/stafflogin")
    }
    return (
        <div>
            <div className='staff-sidebar-back'>
                <div className='staff-sidebar-link pt-5 ms-4'>
                    <a href='/staffdashboard'>Dashboard</a>
                    <a href='/staffviewprofile' className='pt-4'>Profile</a>
                    <a href='/adminviewstudentlist' className='pt-4'>Student List</a>
                    <a href='/studentborrowrequest' className='pt-4'>Student Borrow Request</a>
                    <a href='/staffbooklist' className='pt-4'>Book List</a>
                    <a href='/staffmybook' className='pt-4'>My Books</a>
                    <a href='/staffnotification' className='pt-4'>Notification</a>
                    <div className='pt-5 text-center'>
                        <button className='staff-sidebar-logoutbtn' onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffSidebar
