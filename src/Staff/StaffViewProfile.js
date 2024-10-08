import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import librhom from '../Images/librhom.jpeg'
import StaffSidebar from './StaffSidebar';
import axios from 'axios';

function StaffViewProfile({url}) {

    const navigate = useNavigate();

    const edit = () => {
        navigate("/staffeditprofile")
    }

    const [data, setData] = useState({})

    const id = localStorage.getItem("staffId")

    useEffect(() => {
        axios.post(`http://localhost:4098/viewastaff/${id}`)
            .then((res) => {
                setData(res.data.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log("err", err);
            })
    }, [])

    const profile = data.profile

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <StaffSidebar />
                </div>
                <div className='col-9 student-view-profile-back'>
                    <div className='text-center mt-4'>
                        <h1>View Profile</h1>
                    </div>
                    <form>
                        <div className='text-center mt-3'>
                            <img src={`${url}${data.profile ? profile.filename : profile}`} className='student-view-profile-img' />
                        </div>
                        <div className='row '>
                            <div className='col'>
                                <div className='ms-5 pt-5'>
                                    <input type='text'
                                        // placeholder='FirstName'
                                        className='ms-5 ps-3 student-reg-input' disabled
                                        value={data?.fname}
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='number'
                                        // placeholder='Staff Id'
                                        className='ms-5 ps-3 student-reg-input' disabled
                                        value={data?.staffId}
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='text'
                                        // placeholder='Department'
                                        className='ms-5 ps-3 student-reg-input' disabled
                                        value={data?.department}
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='email'
                                        // placeholder='Email'
                                        className='ms-5 ps-3 student-reg-input' disabled
                                        value={data?.email}
                                    ></input>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='ms-5 pt-5'>
                                    <input type='text'
                                        // placeholder='LastName'
                                        className='ms-5 ps-3 student-reg-input' disabled
                                        value={data?.lname}
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='text'
                                        // placeholder='Gender'
                                        value={data?.gender}
                                        className='ms-5 ps-3 student-reg-input' disabled
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='number'
                                        // placeholder='Contact'
                                        className='ms-5 ps-3 student-reg-input' disabled
                                        value={data?.contact}
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='password'
                                        // placeholder='Password'
                                        className='ms-5 ps-3 student-reg-input' disabled
                                        value={data?.password}
                                    ></input>
                                </div>
                            </div>
                            <div className='text-center mt-5 ms-5 ps-5 mb-5'>
                                <button className='student-register-submitbtn' onClick={edit}>Edit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StaffViewProfile
