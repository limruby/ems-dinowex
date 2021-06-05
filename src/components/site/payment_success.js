import React from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosConfig.js';


const Success = () => {
    
    if (localStorage.getItem('competitor_id')) {
        console.log()
        const string = localStorage.getItem('competitor_id').substring(1, localStorage.getItem('competitor_id').length-1);
        const competitor_id = { competitor_id:string};
        console.log(competitor_id)
        axiosInstance.post('/api/competitors/updatePayment', competitor_id).then(res => 
            {console.log(competitor_id)}
        ).catch(err => {console.log(err)})
        }
        
    
  return (
            <div>
            <h3><strong>Account Created Successfully!</strong></h3>
                <br></br>
                <Link to="/sign_in">
           <div className="text-center"><a className="btn btn-primary text-uppercase js-scroll-trigger" href="/sign_up">Please Sign In Here</a></div>
                </Link>
            </div>
        )
}

export default Success;
