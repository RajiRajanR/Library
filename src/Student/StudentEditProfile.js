import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import '../Student/Student.css'
import StudentSidebar from './StudentSidebar';
import axios from 'axios';
import { toast } from 'react-toastify';

function StudentEditProfile({ url }) { 

    const navigate = useNavigate();

    const [data, setData] = useState({
        fname: "",
        lname: "",
        studentId: "", 
        gender: "",
        contact: "",
        department: "",
        email: "",
        password: "",
        confirmpassword: "",
        profile: "",
    })

    const id = localStorage.getItem("studentId")
    const [file, setProfileImage] = useState(null);

    const handlechange = (e) => {
        const { name, value, files, type } = e.target;
        if (type === "file") {
            const file = files[0];
            console.log("file",file.name);
            setProfileImage(file);
            setData((prevData) => ({
                ...prevData,
                file: { filename: file.name },
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

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



    const handlesubmit = (e) => {

        e.preventDefault();

        const formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }
        formData.append("file", file);
        console.log(file);
        axios.post(`http://localhost:4098/updatestudentprofile/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                console.log(res);
                toast.success("Student Profile Update Successfully")
                navigate('/studentviewprofile')
            })
            .catch((err) => {
                toast.error("Failed to update Student")
                console.log(err);
            })
    }

    return (
        <div>
            <div>
                <div className='row'>
                    <div className='col-2'>
                        <StudentSidebar />
                    </div>
                    <div className='col-9 student-view-profile-back'>
                        <div className='text-center mt-4'>
                            <h1>Edit Profile</h1>
                        </div>
                        <Link className="text-dark w-100" to="/studentviewprofile">
                            <FaArrowLeftLong />
                        </Link>
                        <form onSubmit={handlesubmit}>
                            <div className='text-center'>
                                <img src={file
                                    ? URL.createObjectURL(file)
                                    : `${url}${data.profile?.filename}`} className='student-view-profile-img' />
                                <label className="upload-icon">
                                    <FaCamera
                                        className="student-view-profile-icon"
                                        style={{ position: "absolute" }}
                                    />
                                    <input
                                        type="file"
                                        style={{ display: "none" }}
                                        name="profile"
                                        onChange={handlechange}
                                    />
                                </label>
                            </div>
                            <div className='row '>
                                <div className='col'>
                                    <div className='ms-5 pt-5'>
                                        <input type='text'
                                            // placeholder='FirstName'
                                            className='ms-5 ps-3 student-reg-input'
                                            name='fname'
                                            value={data?.fname}
                                            onChange={handlechange}
                                        ></input>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='number'
                                            // placeholder='studentId'
                                            className='ms-5 ps-3 student-reg-input'
                                            name='studentId'
                                            value={data?.studentId}
                                            onChange={handlechange}
                                        ></input>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='email'
                                            // placeholder='Email'
                                            className='ms-5 ps-3 student-reg-input'
                                            name='email'
                                            value={data?.email}
                                            onChange={handlechange}
                                        ></input>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='number'
                                            // placeholder='Contact'
                                            className='ms-5 ps-3 student-reg-input'
                                            name='contact'
                                            value={data?.contact}
                                            onChange={handlechange}
                                        ></input>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='ms-5 pt-5'>
                                        <input type='text'
                                            // placeholder='LastName'
                                            className='ms-5 ps-3 student-reg-input'
                                            name='lname'
                                            value={data?.lname}
                                            onChange={handlechange}
                                        ></input>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='text'
                                            // placeholder='Gender'
                                            className='ms-5 ps-3 student-reg-input'
                                            name='gender'
                                            value={data?.gender}
                                            onChange={handlechange}
                                        ></input>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='text'
                                            // placeholder='Book Category'
                                            className='ms-5 ps-3 student-reg-input'
                                            name='department'
                                            value={data?.department}
                                            onChange={handlechange}
                                        ></input>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='password'
                                            // placeholder='Password'
                                            className='ms-5 ps-3 student-reg-input'
                                            name='password'
                                            value={data?.password}
                                            onChange={handlechange}
                                        ></input>
                                    </div>
                                </div>
                                <div className='text-center mt-5 ms-5 ps-5 mb-5'>
                                    <button className='student-register-submitbtn'>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentEditProfile
