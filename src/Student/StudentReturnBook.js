import React, { useEffect, useState } from 'react'
import StudentSidebar from './StudentSidebar'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

function StudentReturnBook() {

    const studentId = localStorage.getItem("studentId");
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        id: "",
        name: '',
        studentsId: studentId
    });

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.post(`http://localhost:4098/studentbookreturn/${id}`)
            .then((res) => {
                console.log("View Successfully", res);
                setData(res.data.data)
            })
            .catch((err) => {
                toast.error("Error Occured")
                console.log("Error Occured", err);

            })
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:4098/studentreturnbook/${id}`)
            .then((res) => {
                toast.success("Book Returned Successfully")
                console.log("Book Returned Successfully", res);
                navigate('/studentmybook')
                getData();
            })
            .catch((err) => {
                toast.error("Error Occured")
                console.log("Error Occured", err);

            })
    }

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <StudentSidebar />
                </div>
                <div className='col-9'>
                    <div className='mt-5 ms-2'>
                        <Link className="text-dark" to="/studentmybook">
                            <FaArrowLeftLong />
                        </Link>
                    </div>
                    <div className='mt-3 text-center'>
                        <h2>Return Book</h2>
                    </div>
                    <div className='row pt-5'>
                        <div className='col'>
                            <div>
                                <input type='text'
                                    placeholder={data?.studentsId?.studentId}
                                    className='ms-5 ps-3 student-reg-input'
                                    name='studentId'
                                ></input>
                            </div>
                            <div>
                                <input type='text'
                                    placeholder={data?.studentsId?.lname}
                                    className='ms-5 ps-3 mt-5 student-reg-input'
                                    name='studentName'
                                ></input>
                            </div>
                            <div>
                                <input type='text'
                                    placeholder={data?.studentsId?.department}
                                    className='ms-5 mt-5 ps-3 student-reg-input'
                                    name='department'
                                ></input>
                            </div>
                        </div>
                        <div className='col'>
                            <div>
                                <input type='number'
                                    placeholder={data?.bId?.id}
                                    className='ms-5 ps-3  student-reg-input'
                                    name='bookId'
                                ></input>
                            </div>
                            <div>
                                <input type='text'
                                    placeholder={data?.bId?.name}
                                    className='ms-5 mt-5 ps-3 student-reg-input'
                                    name='bookTitle'
                                ></input>
                            </div>
                            <div>
                                <input type='text'
                                    placeholder={data?.bId?.category}
                                    className='ms-5 mt-5 ps-3 student-reg-input'
                                    name='bookCategory'
                                ></input>
                            </div>
                        </div>
                        <div className='mt-5 text-center'>
                            <button className='student-book-borrow-submitbtn' onClick={handlesubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentReturnBook
