import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowLeftLong } from 'react-icons/fa6';

function AdminViewStaffBook() {

    const navigate = useNavigate();
    // const staffId = localStorage.getItem("staffId");

    const { staffId } = useParams();
    const [borrowRequests, setBorrowRequests] = useState([]);

    const fine = (id) => {
        navigate('/adminaddstafffine/'+id)
    }

    useEffect(() => {

        axios.post(`http://localhost:4098/staffviewacceptallbook/${staffId}`)
            .then((res) => {
                console.log("View Successfully", res);
                setBorrowRequests(res.data.data)
            })
            .catch((err) => {
                console.log(err);
                toast.error("Error Occured")
            })
    }, [])

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <AdminSidebar />
                </div>
                <div className='col-9'>
                    <div className='mt-5'>
                        <Link className="text-dark" to="/adminviewstafflist">
                            <FaArrowLeftLong />
                        </Link>
                    </div>
                    <div className='row'>
                        {borrowRequests.map((borrowaccpet => (
                            <div className='col-sm-6 col-md-4 col-lg-3 me-5 mt-3'>
                                <Card style={{ width: '20rem' }} className='me-5'>
                                    <Card.Body>
                                        <Card.Text>
                                            <div className='row'>
                                                <div className='col-6'><b>Book Name</b></div>
                                                <div className='col-6'>:   {borrowaccpet.bId.name}</div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-6'><b>Book ID</b></div>
                                                <div className='col-6'>:  {borrowaccpet.bId.id}</div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-6'><b>Author</b></div>
                                                <div className='col-6'>:  {borrowaccpet.bId.author}</div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-6'><b>Language</b></div>
                                                <div className='col-6'>:  {borrowaccpet.bId.language}</div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-6'><b>Category</b></div>
                                                <div className='col-6'>:  {borrowaccpet.bId.category}</div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-6'><b>Date</b></div>
                                                <div className='col-6'>:  {borrowaccpet.date}</div>
                                            </div>
                                        </Card.Text>
                                        <div className='text-end'>
                                            <button className='student-mybook-returnbtn' onClick={()=>{fine(borrowaccpet.bId._id)}}>Add Fine</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminViewStaffBook
