import React, { useState } from 'react';
import './Student.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function StudentLogin() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const validateField = (fieldName, value) => {
        if (!value.trim()) {
            return `${fieldName} is required.`;
        }
        if (fieldName === 'Email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            if (!emailRegex.test(value)) {
                return "Email must be a valid Gmail address.";
            }
        }
        if (fieldName === 'Password') {
            const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
            if (!passwordRegex.test(value)) {
                return "Password must contain at least one number, one special character, and one capital letter.";
            }
        }
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        validationErrors.email = validateField("Email", data.email);
        validationErrors.password = validateField("Password", data.password);

        setErrors(validationErrors);

        // Prevent submission if there are validation errors
        if (validationErrors.email || validationErrors.password) {
            return;
        }

        axios.post("http://localhost:4098/studentlogin", data)
            .then((res) => {
                console.log("Login Successfully", res);
                toast.success("Login Successfully");
                navigate("/studentdashboard");
                localStorage.setItem("studentId", res.data.data._id);
            })
            .catch((err) => {
                toast.error("Email or Password Incorrect");
                console.log(err);
            });
    };

    return (
        <div>
            <div className='student-login-img'>
                <div className='row'>
                    <div className='col mt-5 pt-5'>
                        <div className='text-center'>
                            <h1>Student Login</h1>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className='row mt-5'>
                                    <div className='col-3'></div>
                                    <div className='col-6'>
                                        <div>
                                            <label><b>Email</b></label>
                                        </div>
                                        <div>
                                            <input
                                                type='email'
                                                className='student-login-text mt-2 ps-3'
                                                placeholder='Email'
                                                name='email'
                                                value={data.email}
                                                onChange={handleChange}
                                            />
                                            <div>
                                                {errors.email && <span className='text-danger'>{errors.email}</span>}
                                            </div>
                                        </div>
                                        <div className='mt-4'>
                                            <label><b>Password</b></label>
                                        </div>
                                        <div>
                                            <input
                                                type='password'
                                                className='student-login-text mt-2 ps-3'
                                                placeholder='Password'
                                                name='password'
                                                value={data.password}
                                                onChange={handleChange}
                                            />
                                            <div>
                                                {errors.password && <span className='text-danger'>{errors.password}</span>}
                                            </div>
                                        </div>
                                        <div className='mt-5'>
                                            <button type='submit' className='student-login-loginbtn'>Login</button>
                                        </div>
                                        <div className='mt-4 text-center'>
                                            Don't have an account? <a href='/studentregister'>Register Now</a>
                                        </div>
                                    </div>
                                    <div className='col-3'></div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col'></div>
                </div>
            </div>
        </div>
    );
}

export default StudentLogin;
