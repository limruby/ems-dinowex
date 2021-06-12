import React from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosConfig.js';
import './payment.css';
 
 
const Success = () => {
 
    if (localStorage.getItem('competitor_id')) {
 
        const string = localStorage.getItem('competitor_id').substring(1, localStorage.getItem('competitor_id').length-1);
        const competitor_id = {competitor_id:string};
        
        axiosInstance.post('/api/competitors/updatePayment', competitor_id)
        .then(
            res => {"COMPETITOR POST SUCCESS"}
        ).catch(err => {console.log(err)})
        }
    else if (localStorage.getItem('sponsor_id')) {
 
            const string = localStorage.getItem('sponsor_id').substring(1, localStorage.getItem('sponsor_id').length-1);            
            const sponsor_id = {sponsor_id:string};

            axiosInstance.post('/api/sponsors/updatePayment', sponsor_id)
            .then(
                res => {"SPONSOR POST SUCCESS"}
            ).catch(err => {console.log(err)})
            }
 
 
  return (
    <div className="payment-main-container row justify-content-center">
        <div className="payment-container">
            <h3><strong>Account Created Successfully!</strong></h3>
            <br></br>
            <Link to="/sign_in">
               <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_up">Please Sign In Here</a></div>
            </Link>
        </div>
    </div>
    )
}
 
export default Success;