import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import "../../../assets/css/agency.min.css";
<<<<<<< HEAD
<<<<<<< HEAD
//import NavBar from './../navbar';
=======
import NavBar from './../navbar';
>>>>>>> 2dbc05f (sponsor sign up updated)
=======
//import NavBar from './../navbar';
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)

import Footer from './../footer';
import axiosInstance from '../../../utils/axiosConfig.js';
 
function Login()
{
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

    const submit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }
        
<<<<<<< HEAD
        axiosInstance.post('/api/accounts/login', data)
=======
        axiosInstance.post('/accounts/login', data)
>>>>>>> 2dbc05f (sponsor sign up updated)
        .then(res=> {

            localStorage.clear();
            if(res.data.auth===true){
<<<<<<< HEAD

                if(res.data.result.role==="Admin"){
                    localStorage.setItem('role', res.data.result.role);                    
                    window.location.href = '/admin_dashboard';
                }
                else if(res.data.result.role==="Competitor"){
                    // console.log(res.data.result._id)
                    var account_id = JSON.stringify(res.data.result._id)
                   
                    axiosInstance.get("/api/competitors/read", {params:{account_id:account_id}})
                    .then(function(response) {
                          if(response.data.data.bill_status === "true"){
                               localStorage.setItem('token', res.data.token); 
                               localStorage.setItem('user_id', JSON.stringify(res.data.result._id));
                               
                                redirect();
                          }
                          else{
                              localStorage.setItem("competitor_id", JSON.stringify(response.data.data._id))
                              console.log(localStorage.getItem("competitor_id"))
                              var url=""
                              if(response.data.data.category === "Professional Innovator"){
                                url = "https://www.billplz-sandbox.com/_0pbgc2r6"
                              }
                              else if(response.data.data.category === "Junior Innovator"){
                                url = "https://www.billplz-sandbox.com/9vpry5o83"
                           }
                              else if(response.data.data.category === "Young Innovator"){
                                url = "https://www.billplz-sandbox.com/lew_nvul8"
                           }
                           window.open(url,"_self")
                          }

                        }).catch(function(error) {
                          console.log(error);
                        });                    
                }
                else if(res.data.result.role==="Sponsor"){      
                    var sponsor_id = JSON.stringify(res.data.result._id)              
                    axiosInstance.get("/api/sponsors/read", {params:{account_id:sponsor_id}})
                        .then(function(response) {
                          if(response.data.data.bill_status === "true"){
                               localStorage.setItem('token', res.data.token); 
                               localStorage.setItem('user_id', JSON.stringify(res.data.result._id));                              
                               redirect();
                          }
                          else{
                            localStorage.setItem("sponsor_id", JSON.stringify(response.data.data._id))
                            console.log(localStorage.getItem("sponsor_id"))
                            var sponsor_url=""
                            if (response.data.data.category === "Bronze Package"){
                              sponsor_url = "https://www.billplz-sandbox.com/ip52udve6"
                         }
                         else if(response.data.data.category === "Silver Package"){
                          sponsor_url = "https://www.billplz-sandbox.com/urnlfccd7"
                         }
                         else if(response.data.data.category === "Gold Package"){
                          sponsor_url = "https://www.billplz-sandbox.com/nnoul8ls0"
                         }
                         window.open(sponsor_url,"_self")
                          }

                        }).catch(function(error) {
                          console.log(error);
                        });
                    }                           
=======
                localStorage.setItem('token', res.data.token); 
                localStorage.setItem('user_id', JSON.stringify(res.data.result._id));
              console.log(res.data);  
                
            redirect();
>>>>>>> 2dbc05f (sponsor sign up updated)
            }
            else{
                alert("Email or password not match.")
            }
        });   
    }

    const redirect=()=>{
        window.location.href = '/user_dashboard';
    }

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <NavBar/>
>>>>>>> 2dbc05f (sponsor sign up updated)
=======
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)

        <div className="login-main-container">
            <div className="login-form-container">
                    <h3>Login</h3>
                <form onSubmit={submit}>

                    <label htmlFor="email_id">E-mail <span>*</span></label>
                    <input className="form-input" type='email'name='email' id="email_id"
                    placeholder='E-mail' required="required"
                    data-validation-required-message="Please enter your e-mail."
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>

                    <label htmlFor="password_id">Password <span>*</span></label>
                    <input className="form-input" type='password'name='password' id="passwordl_id"
                    placeholder='password' required="required"
                    data-validation-required-message="Please enter your password."
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>

                
                    <input className="submit-btn" type="submit" value="Login" />

                    <Link to="/sign_up">
                        <p>
                           <a href="/sign_up">Not register yet? Sign up here.</a>
                        </p>
                    </Link>
                </form>
            </div>

        </div> 

<<<<<<< HEAD
=======
        <Footer/>
>>>>>>> 2dbc05f (sponsor sign up updated)
    </>
  )
}

export default Login;