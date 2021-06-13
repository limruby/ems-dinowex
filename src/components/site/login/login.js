import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../assets/css/agency.min.css";
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
        
        axiosInstance.post('/api/accounts/login', data)
        .then(res=> {

            localStorage.clear();
            if(res.data.auth===true){

                if(res.data.result.role==="Admin"){
                    localStorage.setItem('role', res.data.result.role);  
                    localStorage.setItem('token', res.data.token);                     
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
<section className="section-container">
        
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

                    <div style={{textAlign:"center"}}>
                    <input className="submit-btn" type="submit" value="Login" />

                    <Link to="/sign_up">
                        <p>
                           <a href="/sign_up">Not register yet? Sign up here.</a>
                        </p>
                    </Link>
                    </div>
                </form>
         

        </div> 
        </section>
    </>
  )
}

export default Login;