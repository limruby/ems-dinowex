import React from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosConfig.js';
import './payment.css';
 
 
const Fail = () => {
 
 
  return (
    <div className="payment-main-container row justify-content-center">
        <div className="payment-container">
            <h3><strong>Payment Fail</strong></h3>
            <br></br>
            <Link to="/sign_in">
               <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_in">Please Login to Make Payment Again</a></div>
            </Link>
        </div>
    </div>
        )
}
 
export default Fail;