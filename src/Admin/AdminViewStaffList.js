import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import librhom from '../Images/librhom.jpeg'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
function AdminViewStaffList({ url }) {

    const navigate = useNavigate();
    const [staff, setStaff] = useState([])

    const viewbook = (staffId) => {
        navigate('/adminviewstaffbook/'+staffId)
    }
 
    useEffect(() => {
        axios.post("http://localhost:4098/viewallstaff")
            .then((res) => {
                console.log("View Successfully", res);
                if (res.status === 200) {
                    setStaff(res.data.data)
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
                    <AdminSidebar />
                </div>
                <div className='col-9 pt-3 ms-4'>
                    <div className=' text-center'>
                        <h2>Staff List</h2>
                    </div>
                    <div className='row adminview-stafflist-header mt-5'>
                        {/* <div className='col'>Sl.No</div> */}
                        <div className='col'>Profile</div>
                        <div className='col'>Name</div>
                        <div className='col'>Staff Id</div>
                        <div className='col'>Gender</div>
                        <div className='col'>Department</div>
                        <div className='col'>Email</div>
                        <div className='col'>Contact</div>
                        <div className='col'>Books</div>
                    </div>
                    {staff.map((staff) => (
                        <div className='row pt-4 '>
                            <div className='col'>
                                <img src={`${url}/${staff.profile.originalname}`} className='adminview-stafflist-img' />
                            </div>
                            <div className='col'>{staff.fname} {staff.lname}</div>
                            <div className='col'>{staff.staffId}</div>
                            <div className='col'>{staff.gender}</div>
                            <div className='col'>{staff.department}</div>
                            <div className='col'>{staff.email}</div>
                            <div className='col'>{staff.contact}</div>
                            <div className='col'>
                                <button className='adminview-stafflist-viewbtn' onClick={()=>viewbook(staff._id)}>View</button>
                            </div>
                        </div>
                    ))}
                    {/* Tiayana Castro */}
                </div>
            </div>
        </div>
    )
}

export default AdminViewStaffList
