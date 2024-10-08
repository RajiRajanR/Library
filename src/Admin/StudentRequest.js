import React from 'react'
import AdminSidebar from './AdminSidebar'

function StudentRequest() {
    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <AdminSidebar />
                </div>
                <div className='col-9'>
                    <div className='text-center pt-5'>
                        <h2>All Student Request</h2>
                    </div>
                    <div className='row ms-5 mt-5 student-request-div1 pt-2'>
                        <div className='col ps-5'>Sl.No</div>
                        <div className='col'>Name</div>
                        <div className='col'>Email</div>
                        <div className='col'>Conatct</div>
                        <div className='col'>Accept/Reject</div>
                    </div>
                    <div className='row ms-5 mt-5 student-request-div2 pt-2'>
                        <div className='col ps-5'>1</div>
                        <div className='col'>Sharik</div>
                        <div className='col'>sharik@gmail.com</div>
                        <div className='col'>9090909090</div>
                        <div className='col'>
                            <button className='student-request-acceptbtn'>Accept</button>
                            <button className='student-request-rejectbtn'>Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentRequest
