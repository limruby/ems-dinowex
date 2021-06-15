import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/agency.min.css';
 
 
const Fail = () => {
 
 
  return (
    <section className="section-container">
        <div className="form-container">
            <h3><strong>Payment Fail</strong></h3>

                <br></br>
                <Link to="/sign_in">
           <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_in">Please Login to Make Payment Again</a></div>
                </Link>

    </div>
    </section>
        )
}
 
export default Fail;