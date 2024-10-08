import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import StaffSidebar from './StaffSidebar';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaArrowLeftLong } from 'react-icons/fa6';

function StaffFinePayment() {
    const [data, setData] = useState({
        cardName: "",
        cardNo: "",
        fineAmount: ""
    });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData, [name]: value
        }));
    };

    const validateField = (fieldName, value) => {
        if (!value) {
            return `${fieldName} is required.`;
        }
        return "";
    };

    const validateCardNo = (fieldName, value) => {
        if (!value) {
            return `${fieldName} is required.`;
        } else if (value.length !== 16) {
            return `Please enter a valid Card number.`;
        }
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        formErrors.cardName = validateField('Card Name', data.cardName);
        formErrors.cardNo = validateCardNo('Card Number', data.cardNo);
        formErrors.fineAmount = validateField('Fine Amount', data.fineAmount);

        setErrors(formErrors);

        const isValid = Object.values(formErrors).every((error) => error === "");
        if (!isValid) {
            return;
        }

        axios.post(`http://localhost:4098/staffpayupdate/${id}`, data)
            .then((res) => {
                toast.success('Payment Successful');
                console.log('Payment Successful',res);
                navigate('/staffmybook');
            })
            .catch((err) => {
                toast.error('Payment Failed');
                console.error('Payment Error:', err);
            });
    };

    return (
        <div>
            <div className='row'>
                <div className='col-2'>
                    <StaffSidebar />
                </div>
                <div className='col-9'>
                    <div className='ms-5 mt-5'>
                        <Link className="text-dark" to="/staffnotification">
                            <FaArrowLeftLong />
                        </Link>
                    </div>
                    <div className='text-center mt-5'>
                        <h2>Fine Payment</h2>
                    </div>
                    <div className='row'>
                        <div className='col'></div>
                        <div className='col'>
                            <div>
                                <input
                                    type='text'
                                    className='ms-5 mt-5 ps-3 staff-reg-input'
                                    placeholder='Name On Card'
                                    name='cardName'
                                    value={data.cardName}
                                    onChange={handleChange}
                                />
                                <div>
                                    {errors.cardName && <span className='text-danger ms-5'>{errors.cardName}</span>}
                                </div>
                            </div>
                            <div>
                                <input
                                    type='number'
                                    className='ms-5 mt-5 ps-3 staff-reg-input'
                                    placeholder='Card Number'
                                    name='cardNo'
                                    value={data.cardNo}
                                    onChange={handleChange}
                                />
                                <div>
                                    {errors.cardNo && <span className='text-danger ms-5'>{errors.cardNo}</span>}
                                </div>
                            </div>
                            <div>
                                <input
                                    type='number'
                                    className='ms-5 mt-5 ps-3 staff-reg-input'
                                    placeholder='Fine Amount'
                                    name='fineAmount'
                                    value={data.fineAmount}
                                    onChange={handleChange}
                                />
                                <div>
                                    {errors.fineAmount && <span className='text-danger ms-5'>{errors.fineAmount}</span>}
                                </div>
                            </div>
                            <div className='mt-5 text-center ms-5'>
                                <button className='student-fine-finebtn' onClick={handleSubmit}>
                                    Pay
                                </button>
                            </div>
                        </div>
                        <div className='col'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffFinePayment;
