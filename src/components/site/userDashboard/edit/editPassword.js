import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 
function EditAccount({data, setData}) {
 
=======

function EditAccount({data, setData}) {

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
 
function EditAccount({data, setData}) {
 
>>>>>>> 3c5d2dd (resolved issues)
=======

function EditAccount({data, setData}) {

>>>>>>> 962c9ed (merge from before)
=======
 
function EditAccount({data, setData}) {
 
>>>>>>> 8654e33 (edit folder)
=======
 
function EditAccount({data, setData}) {
 
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
/////////////////////get login user (REPLACE THIS) ////////////////
const [user, setState] = useState({
      _id: '',
      newPassword: '',
      confirmPassword:''
 
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
   
 
    const inputChange = input => e => {
        setState({
            ...user,
                        _id:data._id,
<<<<<<< HEAD
=======
    

    const inputChange = input => e => {
        setState({
            ...user,
>>>>>>> 7c0a793 (merged with alexia's branch)
=======
   
 
    const inputChange = input => e => {
        setState({
            ...user,
                        _id:data._id,
>>>>>>> 3c5d2dd (resolved issues)
=======
    

    const inputChange = input => e => {
        setState({
            ...user,
			_id:data._id,
>>>>>>> 962c9ed (merge from before)
=======
   
 
    const inputChange = input => e => {
        setState({
            ...user,
                        _id:data._id,
>>>>>>> 8654e33 (edit folder)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
        else if (user.newPassword==="" || user.confirmPassword===""){
            alert("Form not fill");
        }
        else{
           
             console.log(data);  
            ///////update to db /////////////
             axiosInstance.post("/api/accounts/update", user)
<<<<<<< HEAD
<<<<<<< HEAD
            .then(function(response) {
               window.location.href = '/user_dashboard';
=======
        else if (user.newPassword=="" || user.confirmPassword==""){
=======
        else if (user.newPassword==="" || user.confirmPassword===""){
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
            alert("Form not fill");
        }
        else{
           
             console.log(data);  
            ///////update to db /////////////
             axiosInstance.post("/accounts/update", user)
=======
>>>>>>> 248fc10 (added /api/ to axios GET POST)
            .then(function(response) {
<<<<<<< HEAD
              // window.location.href = '/user_dashboard';
>>>>>>> 7c0a793 (merged with alexia's branch)
=======
               window.location.href = '/user_dashboard';
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
=======
            .then(function(response) {
               window.location.href = '/user_dashboard';
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
            }).catch(function(error) {
              console.log(error);
            })
        }
    }
 
/////////////////////////////////////////////////////////////
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 
=======

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
 
>>>>>>> 3c5d2dd (resolved issues)
=======

>>>>>>> 962c9ed (merge from before)
=======
 
>>>>>>> 8654e33 (edit folder)
=======
 
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 
=======

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
 
>>>>>>> 3c5d2dd (resolved issues)
=======

>>>>>>> 962c9ed (merge from before)
=======
 
>>>>>>> 8654e33 (edit folder)
=======
 
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm New Password </label>
                    <input className="form-control" type='password'name='confirmPassword' id="confirmPassword"
                    placeholder='password' required
                    minLength="8"
                    onChange={inputChange('confirmPassword')} value={user.confirmPassword} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                   
                </div>
       
 
=======
                    
                </div>
        

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
                   
                </div>
       
 
<<<<<<< HEAD
>>>>>>> 3c5d2dd (resolved issues)
=======
                    
                </div>
        

>>>>>>> 962c9ed (merge from before)
=======
                   
                </div>
       
 
>>>>>>> 8654e33 (edit folder)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 
        )
 
=======

        )

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
 
        )
 
>>>>>>> 3c5d2dd (resolved issues)
=======

        )

>>>>>>> 962c9ed (merge from before)
=======
 
        )
 
>>>>>>> 8654e33 (edit folder)
=======
 
        )
 
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
}
 
export default EditAccount;