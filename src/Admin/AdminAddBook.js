import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import '../Admin/Admin.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AdminAddBook() {

    const navigate=useNavigate();

    const [data, setData] = useState({
        name: "",
        author: "",
        id: "",
        language: "",
        category: "",
        image: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        author: "",
        id: "",
        language: "",
        category: "",
        image: ""
    })
    const validatefield = (fieldname, value) => {
        if (!value) {
            return `${fieldname} is required.`
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

        errors.name = validatefield("Name", data.name);
        errors.author = validatefield("Author", data.author);
        errors.id = validatefield("ID", data.id);
        errors.language = validatefield("Language", data.language);
        errors.category = validatefield("Category", data.category);
        // errors.image = validatefield("Image", data.image);

        setErrors(errors);

        const formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }

        formData.append("profile", data.profile);
        console.log(data.profile);
        axios.post("http://localhost:4098/bookregister", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                console.log(res);
                toast.success(res.data.msg)
                navigate("/adminviewbooklist")
            })
            .catch((err) => {
                toast.error("Error")
            })
    }

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <AdminSidebar />
                </div>
                <div className='col-9 '>
                    <div className='text-center mt-5'>
                        <h2>Add Book</h2>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='pt-5'>
                                <input type='text'
                                    placeholder='Book Name'
                                    className='ms-5 ps-3 admin-reg-input'
                                    name='name'
                                    value={data.name}
                                    onChange={handlechange}
                                ></input>
                                <div>
                                    {errors.name && <span className='text-danger ms-5'>{errors.name}</span>}
                                </div>
                            </div>
                            <div className='pt-5'>
                                <input type='text'
                                    placeholder='Book Author'
                                    className='ms-5 ps-3 admin-reg-input'
                                    name='author'
                                    value={data.author}
                                    onChange={handlechange}
                                ></input>
                                <div>
                                    {errors.author && <span className='text-danger ms-5'>{errors.author}</span>}
                                </div>
                            </div>
                            <div className='pt-5'>
                                <input type='number'
                                    placeholder='Book ID'
                                    className='ms-5 ps-3 admin-reg-input'
                                    name='id'
                                    value={data.id}
                                    onChange={handlechange}
                                ></input>
                                <div>
                                    {errors.id && <span className='text-danger ms-5'>{errors.id}</span>}
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='pt-5'>
                                <input type='text'
                                    placeholder='Book Language'
                                    className='ms-5 ps-3 admin-reg-input'
                                    name='language'
                                    value={data.language}
                                    onChange={handlechange}
                                ></input>
                                <div>
                                    {errors.language && <span className='text-danger ms-5'>{errors.language}</span>}
                                </div>
                            </div>
                            <div className='pt-5'>
                                <input type='text'
                                    placeholder='Book Category'
                                    className='ms-5 ps-3 admin-reg-input'
                                    name='category'
                                    value={data.category}
                                    onChange={handlechange}
                                ></input>
                                <div>
                                    {errors.category && <span className='text-danger ms-5'>{errors.category}</span>}
                                </div>
                            </div>
                            <div className='pt-5'>
                                <input type='file'
                                    className='ms-5 ps-3 admin-reg-input'
                                    name='file'
                                    onChange={handlefilechange}
                                ></input>
                                {/* <div>
                                    {errors.image && <span className='text-danger ms-5'>{errors.image}</span>}
                                </div> */}
                            </div>
                        </div>
                        <div className='text-center mt-5'>
                            <button className='admin-submitbtn' onClick={handlesubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddBook
