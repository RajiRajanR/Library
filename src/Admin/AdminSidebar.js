import React from 'react'
import '../Admin/Admin.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function AdminSidebar() {

    const navigate = useNavigate();

    const logout = () => {
        toast.success("Logged Out Successfully!!!")
        navigate("/adminlogin")
    }
    return (
        <div>
            <div className='admin-sidebar-back'>
                <div className='admin-sidebar-link pt-5 ms-4'>
                    <a href='/admindashboard' className=''>Dashboard</a>
                    <a href='/adminviewstafflist' className='pt-4'>Staff List</a>
                    <a href='/staffborrowrequest' className='pt-4'>Staff Borrow Request</a>
                    <a href='/adminaddbook' className='pt-4'>Add Book  </a>
                    {/* Update & Delete */}
                    <a href='/adminviewbooklist' className='pt-4'>Book List</a>
                    <div className='pt-5 text-center'>
                        <button className='admin-sidebar-logoutbtn' onClick={logout}>Logout</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar
