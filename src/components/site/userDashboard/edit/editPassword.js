import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';
<<<<<<< HEAD
 
function EditAccount({data, setData}) {
 
=======

function EditAccount({data, setData}) {

>>>>>>> 7c0a793 (merged with alexia's branch)
/////////////////////get login user (REPLACE THIS) ////////////////
const [user, setState] = useState({
      _id: '',
      newPassword: '',
      confirmPassword:''
 
});
<<<<<<< HEAD
   
 
    const inputChange = input => e => {
        setState({
            ...user,
                        _id:data._id,
=======
    

    const inputChange = input => e => {
        setState({
            ...user,
>>>>>>> 7c0a793 (merged with alexia's branch)
            [input]: e.target.value
        });
    };
 
    const handleForm=(e)=>{
        e.preventDefault();
    // perform all neccassary validations
        if (user.newPassword !== user.confirmPassword) {
            alert("Password don't match");  
        }
<<<<<<< HEAD
        else if (user.newPassword==="" || user.confirmPassword===""){
            alert("Form not fill");
        }
        else{
           
             console.log(data);  
            ///////update to db /////////////
             axiosInstance.post("/api/accounts/update", user)
            .then(function(response) {
               window.location.href = '/user_dashboard';
=======
        else if (user.newPassword=="" || user.confirmPassword==""){
            alert("Form not fill");
        }
        else{
            setState({
                ...user,
                '_id': data._id
            });
             console.log(user);   
            ///////update to db /////////////
             axiosInstance.post("/accounts/update", user)
            .then(function(response) {
              // window.location.href = '/user_dashboard';
>>>>>>> 7c0a793 (merged with alexia's branch)
            }).catch(function(error) {
              console.log(error);
            })
        }
    }
 
/////////////////////////////////////////////////////////////
<<<<<<< HEAD
 
=======

>>>>>>> 7c0a793 (merged with alexia's branch)
    return(
        <>
            <form onSubmit={handleForm}>
            <div className="form-container">
                <h1 className="mb-5">Edit Password</h1>
                <span>(Min 8 characters)</span>
                <div className="form-group">
                    <label htmlFor="password">New Password </label>
                    <input className="form-control" type='password'name='password' id="password"
                    placeholder='password' required
                    minLength="8"
                    onChange={inputChange('newPassword')} value={user.newPassword} />
                </div>
<<<<<<< HEAD
 
=======

>>>>>>> 7c0a793 (merged with alexia's branch)
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm New Password </label>
                    <input className="form-control" type='password'name='confirmPassword' id="confirmPassword"
                    placeholder='password' required
                    minLength="8"
                    onChange={inputChange('confirmPassword')} value={user.confirmPassword} />
<<<<<<< HEAD
                   
                </div>
       
 
=======
                    
                </div>
        

>>>>>>> 7c0a793 (merged with alexia's branch)
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
<<<<<<< HEAD
 
        )
 
=======

        )

>>>>>>> 7c0a793 (merged with alexia's branch)
}
 
export default EditAccount;