import React, { useState } from 'react'
import register from '../Images/register.jpeg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
function StudentRegister() {

    const [data, setData] = useState({
        fname: "",
        lname: "",
        studentId: "",
        gender: "",
        email: "",
        department: "",
        contact: "",
        profile: "",
        password: "",
        confirmpassword: ""
    });

    const [errors, setErrors] = useState({
        fname: "",
        lname: "",
        studentId: "",
        gender: "",
        email: "",
        department: "",
        contact: "",
        profile: "",
        password: "",
        confirmpassword: ""
    });

    const navigate = useNavigate();

    const validatefield = (fieldname, value) => {
        if (!value) {
            return `${fieldname} is required.`
        }
        if (fieldname === 'email') {
            return "Email must be contain Gmail Address."
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

    const validatestudentid = (fieldname, value) => {
        if (!value) {
            return `${fieldname} is required.`
        }
        else if (value.length !== 4) {
            return `StudentId contains 4 numbers.`
        }
    }

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

    const handlesubmit = async (e) => {
        e.preventDefault();
        let errors = {};
        let formIsValid = true;

        errors.fname = validatefield("Fname", data.fname);
        errors.lname = validatefield("Lname", data.lname);
        errors.studentId = validatestudentid("StudentId", data.studentId);
        errors.gender = validatefield("Gender", data.gender);
        errors.contact = validatecontact("Contact", data.contact);
        errors.department = validatefield("Department", data.department);
        errors.email = validatefield("Email", data.email);
        errors.password = validatefield("Password", data.password);
        errors.profile = validatefield("Profile", data.profile);
        errors.confirmpassword = validatefield("Confirmpassword", data.confirmpassword);

        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;

        if (!data.password) {
            formIsValid = false;
            errors.password = 'Password is required.'
        }
        else if (!passwordRegex.test(data.password)) {
            errors.password = "Password must contain at least one number, one special character,and one captial letters "
        }

        if (!data.confirmpassword) {
            formIsValid = false;
            errors.confirmpassword = 'ConfirmPassword is required.'
        }
        else if (data.confirmpassword !== data.password) {
            errors.confirmpassword = "Password doesn't match"
        }

        setErrors(errors);

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
            formData.append("studentId", data.studentId);
            formData.append("gender", data.gender);
            formData.append("contact", data.contact);
            formData.append("department", data.department);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("file", data.profile);
 
            try {
                const res = await axios.post(
                    'http://localhost:4098/studentregister', formData
                );
                console.log(res);
                if (res.data.status === 200) {
                    toast.success("Register Successfully")
                    navigate("/studentlogin")
                }
                else {
                    toast.warn("Registration is failed")
                }
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
                        <img src={register} className='student-register-img' />
                    </div>
                    <div className='col-7'>
                        <form onSubmit={handlesubmit}>
                            <div className='row '>
                                <div className='col'>
                                    <div className='ms-5 pt-5'>
                                        <input type='text'
                                            placeholder='FirstName'
                                            className='ms-5 ps-3 student-reg-input'
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
                                            placeholder='Student ID'
                                            className='ms-5 ps-3 student-reg-input'
                                            name='studentId'
                                            value={data.studentId}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.studentId && <span className='text-danger ms-5'>{errors.studentId}</span>}
                                        </div>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='email'
                                            placeholder='Email'
                                            className='ms-5 ps-3 student-reg-input'
                                            name='email'
                                            value={data.email}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.email && <span className='text-danger ms-5'>{errors.email}</span>}
                                        </div>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='number'
                                            placeholder='Contact'
                                            className='ms-5 ps-3 student-reg-input'
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
                                            className='ms-5 ps-3 student-reg-input'
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
                                            className='ms-5 ps-3 student-reg-input'
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
                                            className='ms-5 ps-3 student-reg-input'
                                            name='gender'
                                            value={data.gender}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.gender && <span className='text-danger ms-5'>{errors.gender}</span>}
                                        </div>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='text'
                                            placeholder='Department'
                                            className='ms-5 ps-3 student-reg-input'
                                            name='department'
                                            value={data.department}
                                            onChange={handlechange}
                                        ></input>
                                        <div>
                                            {errors.department && <span className='text-danger ms-5'>{errors.department}</span>}
                                        </div>
                                    </div>
                                    <div className='ms-5 pt-5'>
                                        <input type='file'
                                            placeholder='Profile'
                                            className='ms-5 ps-3 student-reg-input'
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
                                            className='ms-5 ps-3 student-reg-input'
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
                                    <button className='student-register-submitbtn'>Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentRegister
