import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import Loader from './../../../site/Loader';
function EditPassword({data, setData}) {
    const [loading, setLoading] = useState(false);
    const [user, setState] = useState({
        _id: '',
        newPassword: '',
        confirmPassword:''
    });
    const inputChange = input => e => {
        setState({
            ...user,
            _id:data._id,
            [input]: e.target.value
        });
    };
    const handleForm=(e)=>{
        e.preventDefault();
        setLoading(true);
        // perform all neccassary validations
        if (user.newPassword !== user.confirmPassword) {
            alert("Password don't match");
        }
        else if (user.newPassword === "" || user.confirmPassword === "") {
            alert("Form not fill");
        }
        else{        
            ///////update to db /////////////
            axiosInstance.post("/api/accounts/update", user)
            .then(function(response) {
                setLoading(false);
                window.location.href = '/user_dashboard';
            }).catch(function(error) {
                console.log(error);
            })
        }
    }
/////////////////////////////////////////////////////////////
     return(
        <>
            {loading ? <Loader /> : null}
            <form onSubmit={handleForm}>
                <div className="edit-form-container">
                    <h1 className="mb-5">Edit Password</h1>
                    <div className="form-group">
                        <label htmlFor="password">New Password <span>(Min 8 characters)</span> </label>
                        <input className="form-control" type='password' name='password' id="password"
                            placeholder='password' required
                            minLength="8"
                            onChange={inputChange('newPassword')} value={user.newPassword} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm New Password </label>
                        <input className="form-control" type='password' name='confirmPassword' id="confirmPassword"
                            placeholder='password' required
                            minLength="8"
                            onChange={inputChange('confirmPassword')} value={user.confirmPassword} />
                    </div>
                    <br />
                    <div className="btn-group">
                        <Link to="/user_dashboard">
                            <button className="btn btn-danger back-btn">Back</button>
                        </Link>
                        <input className="btn btn-primary" type="submit" value="Update" />
                    </div>
                </div>
            </form>
         </>
 
        );
}
export default EditPassword;
