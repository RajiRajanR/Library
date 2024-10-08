import React, { useEffect, useState } from 'react'
import StaffSidebar from './StaffSidebar'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function StaffMyBooks() {

  const navigate = useNavigate();

  const returnbook = (id) => {
    navigate('/staffbookreturn/' + id)
  }

  const staffId = localStorage.getItem("staffId");

  const [borrowRequests, setBorrowRequests] = useState([]);

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
    <div >
      <div className='row'>
        <div className='col-2'>
          <StaffSidebar />
        </div>
        <div className='col-9'>
          <div className='text-center mt-5'>
            <h2>Admin Accepted Books</h2>
          </div>
          <div className='row'>
            {borrowRequests.map((borrowaccpet => (
              <div className='col-sm-6 col-md-4 col-lg-3 me-5 mt-5'>
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
                    </Card.Text>
                    <div className='text-end'>
                      <button className='student-mybook-returnbtn' onClick={()=>returnbook(borrowaccpet._id)}>Return</button>
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

export default StaffMyBooks
