import React from 'react'
import '../Navbar/Navbar.css'
import liblogo from '../Images/liblogo.jpeg'
function MainNavbar() {
    return (
        <div>
            <div className='navbar-header'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='ms-5 pt-4 navbar'>
                            <h2><img src={liblogo} className='navbar-logo'/> Library Management System</h2>
                        </div>
                    </div>
                    <div className='col-4'></div>
                    <div className='col-2 navbar-link pt-4'>
                        <a href='/' >Home</a>
                        <div className='navbar-dropdown'>
                            <button class='navbar-dropbtn ms-5'>Login</button>
                            <div className='navbar-dropdown-content'>
                                <div><a href='/adminlogin'>Admin</a></div>
                                <div><a href='/studentlogin'>Student</a></div>
                                <div><a href='/stafflogin'>Staff</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default MainNavbar
