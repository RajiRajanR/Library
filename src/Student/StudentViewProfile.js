import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import librhom from '../Images/librhom.jpeg'
import StudentSidebar from './StudentSidebar'
import axios from 'axios';

function StudentViewProfile({url}) {

    const navigate = useNavigate();

    const edit = () => {
        navigate("/studenteditprofile")
    }

    const [data, setData] = useState({})

    const id = localStorage.getItem("studentId")

    useEffect(() => {
        axios.post(`http://localhost:4098/viewastudent/${id}`)
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
                    <StudentSidebar />
                </div>
                <div className='col-9 student-view-profile-back'>
                    <div className='text-center mt-4'>
                        <h1>View Profile</h1>
                    </div>
                    <form>
                        <div className='text-center mt-3'>
                            <img src={`${url}${data.profile?.filename}`} className='student-view-profile-img' />
                        </div>
                        <div className='row '>
                            <div className='col'>
                                <div className='ms-5 pt-5'>
                                    <input type='text'
                                        value={data?.fname}
                                        className='ms-5 ps-3 student-reg-input'
                                        name='fname' disabled
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='number'
                                        // placeholder='studentId'
                                        className='ms-5 ps-3 student-reg-input'
                                        name='studentId' disabled
                                        value={data?.studentId}
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='email'
                                        // placeholder='Email'
                                        className='ms-5 ps-3 student-reg-input'
                                        name='email' disabled
                                        value={data?.email}
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='number'
                                        // placeholder='Contact'
                                        className='ms-5 ps-3 student-reg-input'
                                        name='contact' disabled
                                        value={data?.contact}
                                    ></input>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='ms-5 pt-5'>
                                    <input type='text'
                                        // placeholder='LastName'
                                        className='ms-5 ps-3 student-reg-input'
                                        name='lname' disabled
                                        value={data?.lname}
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='text'
                                        // placeholder='Gender'
                                        className='ms-5 ps-3 student-reg-input'
                                        name='gender' disabled
                                        value={data?.gender}
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='text'
                                        // placeholder='Book Category'
                                        className='ms-5 ps-3 student-reg-input'
                                        name='bookCategory' disabled
                                        value={data?.department}
                                    ></input>
                                </div>
                                <div className='ms-5 pt-5'>
                                    <input type='password'
                                        // placeholder='Password'
                                        className='ms-5 ps-3 student-reg-input'
                                        name='password' disabled
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

export default StudentViewProfile
