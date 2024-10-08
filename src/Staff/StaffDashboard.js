import React, { useEffect, useState } from 'react'
import StaffSidebar from './StaffSidebar'
import axios from 'axios';

function StaffDashboard() {

  const [staff, setStaff] = useState([]);
  const [book, setBook] = useState([])

  useEffect(() => {
    axios.post("http://localhost:4098/viewallstaff")
      .then((res) => {
        console.log(res);
        if (res.data.data != null)
          setStaff(res.data.data);
        else
          setStaff([])
      });

    axios.post("http://localhost:4098/viewallbook")
      .then((res) => {
        console.log(res);
        if (res.data.data != null)
          setBook(res.data.data);
        else
          setBook([])
      });
  }, [])

  return (
    <div>
      <div className='row'>
        <div className='col-2'>
          <StaffSidebar />
        </div>
        <div className='col-9 pt-5'>
          <div className='row'>
            <div className='col'></div>
            <div className='col pt-5 '>
              <div className='staff-dash-box'>
                <div className='text-center '>
                  <h4 className='text-light pt-3'>Staffs</h4>
                  <div className='text-center mt-3'>
                    <span className='text-light text-center'>
                      {(staff.length) > 0 ? staff.length : 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col pt-5 ms-5 ps-5' >
              <div className='staff-dash-box'>
                <div className='text-center '>
                  <h4 className='text-light pt-3'>Books</h4>
                  <div className='text-center mt-3'>
                    <span className='text-light text-center'>
                      {(book.length) > 0 ? book.length : 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaffDashboard
