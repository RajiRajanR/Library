import React, { useState } from 'react'
import '../Admin/Admin.css'
import adminlogin from '../Images/adminlogin.webp'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';
function AdminLogin() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    let email = "admin@gmail.com"
    let password = "Admin@123"

    const handlechange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData, [name]: value
        }))
    };

    const validatefield = (fieldname, value) => {
        if (!value.trim()) {
            return `${fieldname} is required.`
        }
        if (fieldname == "email") {
            return `Email must be a valid Gmail Address.`
        }
        if (fieldname === "password") {
            const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
            if (!passwordRegex.test(value)) {
                return `Password must contain at least one number, one special character, and one Capital letter`;
            }
        }
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        let errors = {};
        errors.email = validatefield("Email", data.email);
        errors.password = validatefield("Password", data.password);
        setErrors(errors);

        if(!errors.email && !errors.password){
            const values = {email : data.email, password : data.password};
            if (email == data.email && password == data.password){
                toast.success("Login Successfully")
                navigate("/admindashboard")
            }
            else{
                toast.warn("USername or Password Incorrect")
            }
        }
    }
    return (
        <div>
            <div>
                <div className='row'>
                    <div className='col'>
                        <img src={adminlogin} className='adminlogin-img'></img>
                    </div>
                    <div className='col mt-5 pt-5'>
                        <div className='text-center'>
                            <h1>Admin Login</h1>
                        </div>
                        <div>
                            <form onSubmit={handlesubmit}>
                                <div className='row mt-5'>
                                    <div className='col-3'></div>
                                    <div className='col-6'>
                                        <div>
                                            <label><b>Email</b></label>
                                        </div>
                                        <div>
                                            <input
                                                type='email'
                                                className='admin-login-text mt-2 ps-3'
                                                placeholder='Email'
                                                name='email'
                                                value={data.email}
                                                onChange={handlechange}
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
                                                className='admin-login-text mt-2 ps-3'
                                                placeholder='Password'
                                                name='password'
                                                value={data.password}
                                                onChange={handlechange}
                                            />
                                            <div>
                                                {errors.password && <span className='text-danger'>{errors.password}</span>}
                                            </div>
                                        </div>
                                        <div className='mt-5'>
                                            <button className='admin-login-loginbtn'>Login</button>
                                        </div>
                                    </div>
                                    <div className='col-3'></div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
