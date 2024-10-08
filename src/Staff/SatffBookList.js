import React, { useEffect, useState } from 'react'
import liblogo from '../Images/libhom.jpeg'
import Card from 'react-bootstrap/Card';
import StaffSidebar from './StaffSidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function SatffBookList({ url }) {

    const navigate = useNavigate();
    const staffId = localStorage.getItem("staffId");

    const [data, setData] = useState({
        bId: "",
        staffsId: staffId,
        date: "",
        userRole: "staff"
    })

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
                console.error("Failed to fetch books:", err);
                toast.error("Failed to fetch books. Please try again later.");
            })
    }, [])

    const borrow = (bookid) => {
        const newData = { ...data, bId: bookid, staffsId: staffId };
        setData(newData)

        axios.post("http://localhost:4098/staffbookborrow", newData)
            .then((res) => {
                toast.success('Waiting For Admin Approval...')
                console.log('Waiting For Admin Approval...', res);
                setData(res.data.data)
            })
            .catch((err) => {
                toast.error('Error')
                console.log('Err', err);
            })
    }
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <StaffSidebar />
                </div>
                <div className='col-9'>
                    <div className='row'>
                        {book.map((novel) => (
                            <div className='col-sm-6 col-md-4 col-lg-3 me-3 mt-3'>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" style={{ width: '17.9rem', height: "10rem" }} src={`${url}/${novel.image.filename}`} />
                                    <Card.Body>
                                        <Card.Title>
                                            <div className='row'>
                                                <div className='col-6'>Book Name</div>
                                                <div className='col-6'>:   {novel.name}</div>
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
                                                <div className='col-6'>:    {novel.language}</div>
                                            </div>
                                        </Card.Text>
                                        <div className='text-end mt-2'>
                                            <button className='student-book-list-borrowbtn' onClick={() => borrow(novel._id)}>Borrow</button>
                                        </div>
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

export default SatffBookList
