import React from 'react'
import '../Footer/Footer.css'
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'

function Footer() {
    return (
        <div>
            <div className='footer-header'>
                <div className='row ms-5 ps-5 pt-5 text-light'>
                    <div className='col'></div>
                    <div className='col'><FaFacebook/></div>
                    <div className='col'><FaInstagramSquare/></div>
                    <div className='col'><FaTwitter/></div>
                    <div className='col'><IoLogoYoutube/></div>
                    <div className='col'></div>
                </div>
                <hr className='text-light'></hr>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col text-center text-light'>
                        @ Designedby Raji Rajan
                    </div>
                    <div className='col'></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
