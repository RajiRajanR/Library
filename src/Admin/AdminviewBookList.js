import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import liblogo from '../Images/libhom.jpeg'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
function AdminviewBookList({ url }) {

    const navigate = useNavigate();

    const update = (bookid) => {
        navigate('/adminupdatebook/'+bookid)
    }

    const [book, setBook] = useState([])

    useEffect(() => {
        axios.post("http://localhost:4098/viewallbook")
            .then((res) => {
                console.log("View Successfully", res);
                if (res.status === 200) {
                    setBook(res.data.data)
                }
            })
            .catch((err) => {
                console.error("Failed to fetch Employees:", err);
                toast.error("Failed to fetch Employees. Please try again later.");
            })
    }, [])

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <AdminSidebar />
                </div>
                <div className='col-9 mb-3'>
                    <div className='row'>
                        {book.map((novel) => (
                            <div className='col-sm-6 col-md-4 col-lg-3 mb-4 mt-3 me-1'>
                                <Card style={{ width: '18rem' }} onClick={()=>update(novel._id)}>
                                    <Card.Img variant="top" style={{ width: '17.9rem', height: "10rem" }} src={`${url}/${novel.image.filename}`} />

                                    <Card.Body>
                                        <Card.Title>
                                            <div className='row'>
                                                <div className='col-6'>Book Name</div>
                                                <div className='col-6'>: {novel.name}</div>
                                            </div>
                                        </Card.Title>
                                        <hr></hr>
                                        <Card.Text>
                                            <div className='row'>
                                                <div className='col-6'>Author's Name</div>
                                                <div className='col-6'>:   {novel.author}</div>
                                            </div>
                                        </Card.Text>
                                        <Card.Text>
                                            <div className='row'>
                                                <div className='col-6'>Language</div>
                                                <div className='col-6'>:   {novel.language}</div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminviewBookList
