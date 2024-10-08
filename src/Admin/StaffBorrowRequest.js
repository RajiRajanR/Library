import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import hom1 from '../Images/hom1.png'
import AdminSidebar from './AdminSidebar';
import axios from 'axios';
import { toast } from 'react-toastify';
function StaffBorrowRequest() {

    const [borrowRequests, setBorrowRequests] = useState([]); // Correct state initialization

    const getData = () => {
        axios.post(`http://localhost:4098/staffviewborrowbook`)
            .then((res) => {
                console.log("View Successfully", res);
                if (res.status === 200) {
                    setBorrowRequests(res.data.data);
                }
            })
            .catch((err) => {
                console.error("Error fetching borrow requests:", err);
                toast.error("Failed to load borrow requests.");
            });
    };

    useEffect(() => {
        getData();
    }, []);

    // Accept request
    const handleAccept = (id) => {
        axios.post(`http://localhost:4098/staffbookborrowaccept/${id}`)
            .then((res) => {
                console.log('Accept Successful', res);
                toast.success("Borrow Request Accepted Successfully");
                getData();
            })
            .catch((err) => {
                console.error("Error accepting request:", err);
                toast.error("Failed to accept borrow request.");
            });
    };

    // Reject request
    const handleReject = (id) => {
        axios.post(`http://localhost:4098/staffbookborrowreject/${id}`)
            .then((res) => {
                console.log('Reject Successful', res);
                toast.success("Borrow Request Rejected Successfully");
                getData();
            })
            .catch((err) => {
                console.error("Error rejecting request:", err);
                toast.error("Failed to reject borrow request.");
            });
    };


    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <AdminSidebar />
                </div>
                <div className='col-9'>
                    <div className='row'>
                        {borrowRequests.map((borrowreq) => (
                            <div key={borrowreq.bookId} className='col-sm-6 col-md-4 col-lg-3 me-3 mt-5'>
                                <Card style={{ width: '18rem' }}>
                                    {/* `${url}/${novel.image.filename}` */}
                                    <Card.Body>
                                        <Card.Text>
                                            <div className='row'>
                                                <div className='col-6'><b>Book Name</b></div>
                                                <div className='col-6'>:   {borrowreq.bId.name}</div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-6'><b>Book ID</b></div>
                                                <div className='col-6'>:  {borrowreq.bId.id}</div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-6'><b>Staff ID</b></div>
                                                <div className='col-6'>:  {borrowreq?.staffsId?.staffId}</div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-6'><b>Staff Name</b></div>
                                                <div className='col-6'>:  {borrowreq?.staffsId?.fname}  {borrowreq?.studentsId?.lname}</div>
                                            </div>
                                        </Card.Text>
                                        <div className='text-center mt-2'>
                                            <button className='borrowreq-acceptbtn'
                                                onClick={() => handleAccept(borrowreq._id)}
                                            >Accept</button>
                                            <button className='ms-2 borrowreq-rejectbtn'
                                                onClick={() => handleReject(borrowreq._id)}
                                            >Reject</button>
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

export default StaffBorrowRequest
