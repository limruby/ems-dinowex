<<<<<<< HEAD
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';

function EditProfile({data, setData}) {

/////////////////////get login data (REPLACE THIS) ////////////////
    const inputChange = input => e => {
        setData({
            ...data,
=======

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';

function EditAccount() {

/////////////////////get login user (REPLACE THIS) ////////////////
const [user, setState] = useState({
    
    name: 'testuser111',
    affiliation:'tester',
    ic_passport_selection:'NRIC',
    ic_passport_number: '1111111111',
    address: 'no 111, jln 111.',
    gender: 'MALE',

});

    const inputChange = input => e => {
        setState({
        	...user,
>>>>>>> 2dbc05f (sponsor sign up updated)
            [input]: e.target.value
        });
    };

    const handleForm=(e)=>{
        e.preventDefault();
    // perform all neccassary validations
<<<<<<< HEAD
        if (data.name ===""||data.affiliation===""||data.nric_passport_selection===""||data.nric_passport_no===""
            ||data.address===""||data.gender===""){
            alert("Form not fill");
        }
        else{
            ///////update to db /////////////
            var postData = {
                _id : data._id,
                name : data.name,
                affiliation : data.affiliation,
                nric_passport_selection : data.nric_passport_selection,
                nric_passport_no : data.nric_passport_no,
                address : data.address,
                gender : data.gender
            }


            axiosInstance.post("/api/competitors/update", postData)
            .then(function(response) {
              window.location.href = '/user_dashboard';
            }).catch(function(error) {
              console.log(error);
            })
        }
    }
console.log(data);
/////////////////////////////////////////////////////////////

    return(
        <>
        <form onSubmit={handleForm}>
        <div className="form-container">
=======
        if (user.name ==""||user.affiliation==""||user.ic_passport_selection==""||user.ic_passport_number==""
            ||user.address==""||user.gender==""){
            alert("Form not fill");
        }
        else{
        	///////update to db /////////////
        	console.log(user);
        }
    }

/////////////////////////////////////////////////////////////

	return(
		<>
		<form onSubmit={handleForm}>
		<div className="form-container">
>>>>>>> 2dbc05f (sponsor sign up updated)
                <h1 className="mb-5">Edit Profile Info</h1>

                <div className="form-group">
                    <label htmlFor="name"><span>*</span>Full Name (as per IC / Passport)</label>
                    <input type="text" className="form-control" name="name" id="name"
                    placeholder='Full Name (as per IC / Passport)' required                    
<<<<<<< HEAD
                    onChange={inputChange('name')} value={data.name} />
=======
                    onChange={inputChange('name')} value={user.name} />
>>>>>>> 2dbc05f (sponsor sign up updated)
                </div>
                <div className="form-group">
                    <label htmlFor="affiliation"><span>*</span>Affiliation</label>
                    <input className="form-control" type='text'name='affiliation' id="affiliation"
                    placeholder='Affiliation' required
<<<<<<< HEAD
                    onChange={inputChange('affiliation')} value={data.affiliation} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nric_passport_selection"><span>*</span>NRIC / Passport Number</label>
                    <select className="form-control" id="nric_passport_selection" required
                    onChange={inputChange('nric_passport_selection')} value={data.nric_passport_selection} >
=======
                    onChange={inputChange('affiliation')} value={user.affiliation} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ic_passport_selection"><span>*</span>NRIC / Passport Number</label>
                    <select className="form-control" id="ic_passport_selection" required
                    onChange={inputChange('ic_passport_selection')} value={user.ic_passport_selection} >
>>>>>>> 2dbc05f (sponsor sign up updated)
                        <option value="">Please select</option>
                        <option value="NRIC">NRIC</option>
                        <option value="PASSPORT NUMBER">Passport Number</option>
                    </select>
                    <br/>
<<<<<<< HEAD
                    <input className="form-control" type='text'name='nric_passport_no' id="nric_passport_no"
                    placeholder='NRIC / Passport Number' required
                    onChange={inputChange('nric_passport_no')} value={data.nric_passport_no} />
=======
                    <input className="form-control" type='text'name='ic_passport_number' id="ic_passport_number"
                    placeholder='NRIC / Passport Number' required
                    onChange={inputChange('ic_passport_number')} value={user.ic_passport_number} />
>>>>>>> 2dbc05f (sponsor sign up updated)
                </div>
                <div className="form-group">
                    <label htmlFor="address"><span>*</span>Address</label>
                    <textarea className="form-control" id="address" cols="30" rows="7"
<<<<<<< HEAD
                    onChange={inputChange('address')} value={data.address} 
=======
                    onChange={inputChange('address')} value={user.address} 
>>>>>>> 2dbc05f (sponsor sign up updated)
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="gender_id"><span>*</span>Gender</label>
                    <select className="form-control" id="gender_id" required
<<<<<<< HEAD
                    onChange={inputChange('gender')} value={data.gender} >
=======
                    onChange={inputChange('gender')} value={user.gender} >
>>>>>>> 2dbc05f (sponsor sign up updated)
                        <option value="">Please select</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>
<<<<<<< HEAD
        
=======
	    
>>>>>>> 2dbc05f (sponsor sign up updated)

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

}

export default EditProfile;
=======
		)

}

export default EditAccount;
>>>>>>> 2dbc05f (sponsor sign up updated)
