import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../../../utils/axiosConfig.js';

function EditProfile() {
    const [data, setData] = useState({
        name:'',
        affiliation:'',
        nric_passport_selection:'',
        nric_passport_no:'',
        address:'',
        gender:'',
        category:''
    });

    const location = useLocation();
    const thePath = location.pathname;
    const user_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"'+ user_id +'"'
    
    useEffect(() => {
        axiosInstance.get("/api/competitors/read", {params:{account_id:string}})
        .then(function(response) {
          setData(response.data.data);
        }).catch(function(error) {
          console.log(error); })
    }, [string])
       
          
    
    const inputChange = input => e => {
        setData({
            ...data,
            [input]: e.target.value
        });
    };

    const handleForm=(e)=>{
        e.preventDefault();
    // perform all neccassary validations
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
                gender : data.gender,
                category: data.category
            }


            axiosInstance.post("/api/competitors/update", postData)
            .then(function(response) {
              window.location.href = '/admin_dashboard';
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
                <h1 className="mb-5">Edit Profile Info</h1>

                <div className="form-group">
                    <label htmlFor="name"><span>*</span>Full Name (as per IC / Passport)</label>
                    <input type="text" className="form-control" name="name" id="name"
                    placeholder='Full Name (as per IC / Passport)' required                    
                    onChange={inputChange('name')} value={data.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="category"><span>*</span>Category</label>
                    <select className="form-control" id="category" required
                    onChange={inputChange('category')} value={data.category} >
                        <option value="">Please select</option>
                        <option value="Professional Innovator">Professional Innovator</option>
                        <option value="Junior Innovator">Junior Innovator</option>
                        <option value="Young Innovator">Young Innovator</option>
                    </select> 
                </div>
                <div className="form-group">
                    <label htmlFor="affiliation"><span>*</span>Affiliation</label>
                    <input className="form-control" type='text'name='affiliation' id="affiliation"
                    placeholder='Affiliation' required
                    onChange={inputChange('affiliation')} value={data.affiliation} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nric_passport_selection"><span>*</span>NRIC / Passport Number</label>
                    <select className="form-control" id="nric_passport_selection" required
                    onChange={inputChange('nric_passport_selection')} value={data.nric_passport_selection} >
                        <option value="">Please select</option>
                        <option value="NRIC">NRIC</option>
                        <option value="PASSPORT NUMBER">Passport Number</option>
                    </select>
                    <br/>
                    <input className="form-control" type='text'name='nric_passport_no' id="nric_passport_no"
                    placeholder='NRIC / Passport Number' required
                    onChange={inputChange('nric_passport_no')} value={data.nric_passport_no} />
                </div>
        

                <br />

                <div className="col-4 btn-group">
                    <Link to="/admin_dashboard">
                        <button className="btn btn-danger back-btn">Back</button>
                    </Link>
                    <input className="btn btn-primary" type="submit" value="Update" />
                </div>
            </div>
            </form>

         </>

        )

}

export default EditProfile;