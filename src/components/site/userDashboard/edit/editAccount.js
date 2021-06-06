<<<<<<< HEAD
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
=======

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
>>>>>>> 2dbc05f (sponsor sign up updated)
import axiosInstance from '../../../../utils/axiosConfig.js';

function EditAccount({data, setData}) {

<<<<<<< HEAD
=======
console.log(data)

>>>>>>> 2dbc05f (sponsor sign up updated)
    const inputChange = input => e => {
        setData({
            ...data,
            [input]: e.target.value
        });
    };

    const handleForm=(e)=>{
        e.preventDefault();
    // perform all neccassary validations
<<<<<<< HEAD
       if (data.email === ""){
=======
       if (data.email ==""){
>>>>>>> 2dbc05f (sponsor sign up updated)
            alert("Form not fill");
        }
        else{
            ///////update to db /////////////
<<<<<<< HEAD
            axiosInstance.post("/api/accounts/update", data)
            .then(function(response) {
              window.location.href = '/user_dashboard';
=======
            axiosInstance.post("/accounts/update", data)
            .then(function(response) {
              // window.location.href = '/user_dashboard';
>>>>>>> 2dbc05f (sponsor sign up updated)
            }).catch(function(error) {
              console.log(error);
            })
            
        }
    }

/////////////////////////////////////////////////////////////

    return(
        <>
            <form onSubmit={handleForm}>
            <div className="form-container">
                <h1 className="mb-5">Edit Account Info</h1>
                <div className="form-group">
                    <label htmlFor="email">Email Address </label>
                    <input className="form-control" type='email'name='email' id="email"
                    placeholder='E-mail' required
                    onChange={inputChange('email')} value={data.email} 
                    />
                </div>
                 
                <br />

               
                <div className="col-4 btn-group">
                    <Link to="/user_dashboard">
                        <button className="btn btn-danger back-btn">Back</button>
                    </Link>
                    <input className="btn btn-primary" type="submit" value="Update" />
                </div>
            </div>
            </form>
         </>

        )

}

export default EditAccount;