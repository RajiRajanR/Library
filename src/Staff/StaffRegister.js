import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import librhom from '../Images/librhom.jpeg'
import { FaCamera } from "react-icons/fa";
import '../Staff/Staff.css'
import register from '../Images/register.jpeg'
import axios from 'axios';
import { toast } from 'react-toastify';
function StaffRegister() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        fname: "",
        lname: "",
        staffId: "",
        gender: "",
        contact: "",
        department: "",
        email: "",
        password: "",
        confirmpassword: "",
        profile: "",
    })

    const [errors, setErrors] = useState({
        fname: "",
        lname: "",
        staffId: "",
        gender: "",
        contact: "",
        department: "",
        email: "",
        password: "",
        confirmpassword: "",
        profile: "",
    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData, [name]: value
        }))
    };

    const handlefilechange = (e) => {
        const { name, files } = e.target;
        setData({
            ...data, [name]: files[0]
        })
    }

    const validatefield = (fieldname, value) => {
        if (!value) {
            return `${fieldname} is required.`
        }
        if (fieldname === "email" && value === "String" && !value.endswith("@gmail.com")) {
            return `Email must be a valid email Address.`
        }
    }

    const validatecontact = (fieldname, value) => {
        if (!value) {
            return `${fieldname} is required.`
        }
        else if (value.length !== 10) {
            return `Please enter a valid contact number.`
        }
    }

    const validatestaffid = (fieldname, value) => {
        if (!value) {
            return `${fieldname} is required.`
        }
        else if (value.length !== 4) {
            return `Staff Id contains 4 numbers.`
        }
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        let errors = {};
        let formIsValid = true

        errors.fname = validatefield("FirstName", data.fname)
        errors.lname = validatefield("LastName", data.lname)
        errors.staffId = validatestaffid("StaffId", data.staffId)
        errors.gender = validatefield("Gender", data.gender)
        errors.contact = validatecontact("Contact", data.contact)
        errors.department = validatefield("Department", data.department)
        errors.email = validatefield("Email", data.email)
        errors.password = validatefield("Password", data.password)
        errors.confirmpassword = validatefield("Confirmpassword", data.confirmpassword)
        errors.profile = validatefield("Profile", data.profile)

        setErrors(errors);

        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;

        if (!data.password || !data.password.trim()) {
            formIsValid = false;
            errors.password = 'Password is required.'
        }
        else if (!passwordRegex.test(data.password)) {
            errors.password = "Password must contain at least one number, one special character,and one captial letters "
        }

        if (!data.confirmpassword || !data.confirmpassword.trim()) {
            formIsValid = false;
            errors.confirmpassword = 'ConfirmPassword is required.'
        }
        else if (data.confirmpassword !== data.password) {
            errors.confirmpassword = "Password doesn't match"
        }

        for (let key in errors) {
            if (errors[key]) {
                console.log(errors[key]);
                formIsValid = false;
                break;
            }
        }

        console.log("form", formIsValid);
        if (formIsValid) {
            const formData = new FormData();
            formData.append("fname", data.fname);
            formData.append("lname", data.lname);
            formData.append("staffId", data.staffId);
            formData.append("gender", data.gender);
            formData.append("contact", data.contact);
            formData.append("department", data.department);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("file", data.profile);

            try {
                const res = await axios.post(
                    'http://localhost:4098/staffregister', formData
                );
                console.log(res);
                if (res.data.status === 200) {
                    toast.success("Register Successfully")
                    navigate("/stafflogin")
                }
                // else {
                //     toast.warn("Registration is failed")
                // }
            }
            catch (error) {
                toast.error("Error")
            }
        }

    }

    return (
        <div>
            <div className='mb-5 container mt-5'>
                <div className='row'>
                    <div className='col-5 mt-5'>
                        <img src={register} className='staff-register-img' />
                    </div>
                    <div className='col-7'>
                        <form onSubmit={handlesubmit}>
                            <div className='row '>
                                <div className='col'>
                                    <div className='ms-5 pt-5'>
                                        <input type='text'
                                            placeholder='FirstName'
                                            className='ms-5 ps-3 staff-reg-input'
                                            name='fname'
                                            value={data.fname}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.fname && <span className='text-danger ms-5'>{errors.fname}</span>}
                                        </div>
                                    </div>

                                    <div className='ms-5 pt-5'>
                                        <input type='number'
                                            placeholder='StaffId'
                                            className='ms-5 ps-3 staff-reg-input'
                                            name='staffId'
                                            value={data.staffId}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.staffId && <span className='text-danger ms-5'>{errors.staffId}</span>}
                                        </div>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='text'
                                            placeholder='Department'
                                            className='ms-5 ps-3 staff-reg-input'
                                            name='department'
                                            value={data.department}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.department && <span className='text-danger ms-5'>{errors.department}</span>}
                                        </div>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='number'
                                            placeholder='Contact'
                                            className='ms-5 ps-3 staff-reg-input'
                                            name='contact'
                                            value={data.contact}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.contact && <span className='text-danger ms-5'>{errors.contact}</span>}
                                        </div>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='password'
                                            placeholder='Password'
                                            className='ms-5 ps-3 staff-reg-input'
                                            name='password'
                                            value={data.password}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.password && <span className='text-danger ms-5'>{errors.password}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='ms-5 pt-5'>
                                        <input type='text'
                                            placeholder='LastName'
                                            className='ms-5 ps-3 staff-reg-input'
                                            name='lname'
                                            value={data.lname}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.lname && <span className='text-danger ms-5'>{errors.lname}</span>}
                                        </div>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='text'
                                            placeholder='Gender'
                                            className='ms-5 ps-3 staff-reg-input'
                                            name='gender'
                                            value={data.gender}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.gender && <span className='text-danger ms-5'>{errors.gender}</span>}
                                        </div>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='email'
                                            placeholder='Email'
                                            className='ms-5 ps-3 staff-reg-input'
                                            name='email'
                                            value={data.email}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.email && <span className='text-danger ms-5'>{errors.email}</span>}
                                        </div>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='file'
                                            placeholder='Profile'
                                            className='ms-5 ps-3 staff-reg-input'
                                            name='profile'
                                            onChange={handlefilechange}
                                        ></input>
                                        <div>
                                            {errors.profile && <span className='text-danger ms-5'>{errors.profile}</span>}
                                        </div>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='password'
                                            placeholder='Confirm Password'
                                            className='ms-5 ps-3 staff-reg-input'
                                            name='confirmpassword'
                                            value={data.confirmpassword}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.confirmpassword && <span className='text-danger ms-5'>{errors.confirmpassword}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center mt-5 ms-5 ps-5'>
                                    <button className='staff-register-submitbtn'>Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaffRegister
