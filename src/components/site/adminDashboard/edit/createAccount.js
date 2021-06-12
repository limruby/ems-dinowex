import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';

function CreateAccount() {

    var compData ={
        account_id:'',
        category:'default',
        name:'default',
        affiliation:'default',
        nric_passport_selection:'NRIC',
        nric_passport_no:'000000000000',
        phone_no:'0123456789',
        gender:'male',
        address:'default'
    }

    var sponsorData = {
        account_id:'',
        category:'default',
        company_name:'default',
        company_pic_name:'default',
        company_pic_ic:'000000000000',
        company_contact:'0123456789',
        company_address:'default',
        company_website:'default',
    }

    const [data, setData] = useState({
        email:'',
        password:'',
        role:'',
    });

    const inputChange = input => e => {
        setData({
            ...data,
            [input]: e.target.value
        });
    };

    const handleForm=(e)=>{
        e.preventDefault();
    // perform all neccassary validations
    
        // perform all neccassary validations
            if (data.password === null || data.email === null || data.role === null) {
                alert("Form Incomplete!");  
            }


        else{
            ///////update to db /////////////
            axiosInstance.post("/api/accounts/signUp", data)
            .then(function(response) {
              if(data.role === "Competitor"){
                compData["account_id"] = response.data._id
                axiosInstance.post("/api/competitors/create", compData)
                .then(function(response){
                    window.location.href = '/admin_dashboard';
                }).catch(function(error){
                    console.log(error)
                })
              }
              else if(data.role === "Sponsor"){
                sponsorData["account_id"] = response.data._id
                axiosInstance.post("/api/sponsors/create", sponsorData)
                .then(function(response){
                    window.location.href = '/admin_dashboard';
                }).catch(function(error){
                    console.log(error)
                })
              }
            }).catch(function(error) {
              console.log(error);
            })
            
        }
    }

/////////////////////////////////////////////////////////////

    return(
               <div className="create-form-container">
                <form onSubmit={handleForm}>
                <h1 className="mb-5">Account Setup</h1>
                <div className="form-group">
                    <label htmlFor="email"><span>*</span>Email </label>
                    <input className="form-control" type='email'name='email' id="email"
                    placeholder='E-mail' required
                    onChange={inputChange('email')} value={data.email} 
                    />
                </div>
              
                <div className="form-group">
                    <label htmlFor="password"><span>*</span>Password (min 8 character)</label>
                    <input className="form-control" type='password'name='password' id="password"
                    placeholder='password' required
                      minLength="8"
                    onChange={inputChange('password')} value={data.password} />
                </div>
                <div className="form-group">
                <label htmlFor="role"><span>*</span>Category </label>
                <select className="form-control" id="role" required
                    onChange={inputChange('role')} value={data.role} >
                        <option value="">Please select</option>
                        <option value="Competitor">Competitor</option>
                        <option value="Sponsor">Sponsor</option>
                        {/* <option value="Speaker">Speaker</option>
                        <option value="Judge">Judge</option> */}
                    </select> 
                </div>

        

                <br />

                <div className="row">
                    <div className="col-6">
                        <Link to ="/admin_dashboard">
                        <button className="btn btn-danger">Back</button>
                        </Link>
                    </div>
                    <div className="col-6 text-right">
                         <input className="btn btn-primary" type="submit" value="Create" />
                    </div>
                </div>
                </form>
            </div>

        )

}

export default CreateAccount;