import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar';
import '../Admin/Admin.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import axios from 'axios';
import { toast } from 'react-toastify';

function AdminUpdateBook() {

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
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.post(`http://localhost:4098/viewabook/${id}`)
            .then((res) => {
                console.log("View Successfully", res);
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err);

            })
    }, [])

    const handlesubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }
        formData.append("file", data.image);

        axios.post(`http://localhost:4098/updatebook/${id}`, formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res);
                toast.success('Book Updated Successfully')
                navigate('/adminviewbooklist')
            })
            .catch((err) => {
                console.log(err);
                toast.error("Falied to update Book")
            })
    }

    const handledelete = () => {
        axios.post(`http://localhost:4098/deletebook/${id}`)
        .then((res) =>{
            toast.success('Book Delete Successfully')
            console.log(res); 
            navigate('/adminviewbooklist')         
        })
        .catch((err)=>{
            toast.error("Failed to Delete Book")
            console.log(err);
        })
    }
    return (
        <div>
            <div>
                <div className='row'>
                    <div className='col-2'>
                        <AdminSidebar />
                    </div>
                    <div className='col-9'>
                        <div className='ms-5 mt-5'>
                            <Link className="text-dark w-100" to="/adminviewbooklist">
                                <FaArrowLeftLong />
                            </Link>
                        </div>
                        <div className='text-center mt-5'>
                            <h2>Update Book</h2>
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
                                </div>
                                <div className='pt-5'>
                                    <input type='text'
                                        placeholder='Book Author'
                                        className='ms-5 ps-3 admin-reg-input'
                                        name='author'
                                        value={data.author}
                                        onChange={handlechange}
                                    ></input>
                                </div>
                                <div className='pt-5'>
                                    <input type='number'
                                        placeholder='Book ID'
                                        className='ms-5 ps-3 admin-reg-input'
                                        name='id'
                                        value={data.id}
                                        onChange={handlechange}
                                    ></input>
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
                                </div>
                                <div className='pt-5'>
                                    <input type='text'
                                        placeholder='Book Category'
                                        className='ms-5 ps-3 admin-reg-input'
                                        name='category'
                                        value={data.category}
                                        onChange={handlechange}
                                    ></input>
                                </div>
                                <div className='pt-5'>
                                    <input type='file'
                                        className='ms-5 ps-3 admin-reg-input'
                                        name='file'
                                        onChange={handlefilechange}
                                    ></input>
                                </div>
                            </div>
                            <div className='text-center mt-5'>
                                <button className='admin-submitbtn' onClick={handlesubmit}>Update</button>
                                <button className='admin-submitbtn1 ms-3' onClick={handledelete}>Delete</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminUpdateBook
