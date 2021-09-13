import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';

function EditProfile() {
    localStorage.setItem("activeKeys", "Visitor")
    const [data, setData] = useState({
        name: '',
        nric_passport_selection: '',
        nric_passport_no: '',
        contact: '',
    });

    const location = useLocation();
    const thePath = location.pathname;
    const user_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"' + user_id + '"'
    console.log( user_id)
    useEffect(() => {
        axiosInstance.get("/api/visitors/read", { params: { account_id: string } })
            .then(function (response) {
                setData(response.data.data);            
            }).catch(function (error) {
                console.log(error);
            })
    }, [string])

    const inputChange = input => e => {
        setData({
            ...data,
            [input]: e.target.value
        });
    };
    const handleForm = (e) => {
        e.preventDefault();
        // perform all neccassary validations
        if (
            data.name === "" ||
            data.nric_passport_selection === "" ||
            data.nric_passport_no === "" ||
            data.contact === ""
        ) {
            alert("Form not fill");
        }
        else {
            ///////update to db /////////////           
            var postData = {
                _id: data._id,
                name: data.name,
                contact: data.contact,
                nric_passport_selection: data.nric_passport_selection,
                nric_passport_no: data.nric_passport_no,
            }
            axiosInstance.post("/api/visitors/update", postData)
                .then(function (response) {
                    window.location.href = '/admin_dashboard';
                }).catch(function (error) {
                    console.log(error);
                })
        }
    }
    /////////////////////////////////////////////////////////////
    return (
        <>
            <form onSubmit={handleForm}>
                <div className="edit-form-container" style={{ marginTop: "5%", marginBottom: "5%" }}>
                    <h1 className="mb-5">Edit Profile Info</h1>
                    <div className="form-group">
                        <label htmlFor="name"><span>*</span>Full Name (as per IC / Passport)</label>
                        <input type="text" className="form-control" name="name" id="name"
                            placeholder='Full Name (as per IC / Passport)' required
                            onChange={inputChange('name')} value={data.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nric_passport_selection"><span>*</span><span>{data.nric_passport_selection}</span>:  {data.nric_passport_no}</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact"><span>*</span>Contact Number</label>
                        <input className="form-control" type='text' name='contact' id="contact"
                            placeholder='Phone Number (Without dash)' required pattern='[0-9]{10,20}'
                            onChange={inputChange('contact')} value={data.contact}
                        />
                    </div>
                    <br />
                    <div className="btn-group">
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