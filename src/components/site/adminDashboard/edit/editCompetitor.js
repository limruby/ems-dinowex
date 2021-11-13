import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import Loader from './../../../site/Loader';
function EditProfile() {
    localStorage.setItem("activeKeys", "Competitor")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        name:'',
        affiliation:'',
        nric_passport_selection:'',
        nric_passport_no:'',
        address:'',
        gender:'',
        category:'',
        bill_status: '',
        bill_id:'',
        first_purchase:'',
    });
    const location = useLocation();
    const thePath = location.pathname;
    const user_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"'+ user_id +'"'
    
    useEffect(() => {
        setLoading(true);
        axiosInstance.get("/api/competitors/read", {params:{account_id:string}})
        .then(function(response) {
          setData(response.data.data);
          setLoading(false);
        }).catch(function(error) {
          console.log(error); })
    }, [string])
       
    function displayInput(){
        var section=[];
        if(data.nric_passport_selection==="NRIC"){
            section.push( <input
                        className="form-control"
                        type='text'
                        name='nric_passport_no'
                        id="nric_passport_no"
                        placeholder='NRIC (Without dash) '
                        required
                        pattern="[0-9]{12}"
                        onChange={
                            inputChange('nric_passport_no')}
                        value={data.nric_passport_no} />)
        }
        else if (data.nric_passport_selection === "PASSPORT NUMBER") {
            section.push(<input
                className="form-control"
                type='text'
                name='nric_passport_no'
                id="nric_passport_no"
                placeholder='Passport Number '
                required
                onChange={
                    inputChange('nric_passport_no')}
                value={data.nric_passport_no} />)
        }
        return section;
    }
    
    const inputChange = input => e => {
        setData({
            ...data,
            [input]: e.target.value
        });
    };
    const handleForm=(e)=>{
        e.preventDefault();
        setLoading(true);
    // perform all neccassary validations
        if (data.name === "" ||
            data.affiliation === "" ||
            data.nric_passport_selection === "" ||
            data.nric_passport_no === ""||
            data.gender === "") {
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
                category: data.category,  
                bill_status: data.bill_status,
                bill_id: data.bill_id,
                first_purchase: data.first_purchase             
            }
            axiosInstance.post("/api/competitors/update", postData)
            .then(function(response) {
                setLoading(false);
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
        {loading ? <Loader /> : null}
        <div className="edit-form-container" style={{marginTop:"5%", marginBottom:"5%"}}>
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
                        <option value="Young Innovator">Young Innovator</option>
                        <option value="Young Ideation">Young Ideation</option>
                        <option value="Junior Ideation">Junior Ideation</option>
                        <option value="International Innovator">International Innovator</option>
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
                    {displayInput()}
                </div>
                <div className="form-group">
                        <label htmlFor="bill_status"><span>*</span>Payment Verify</label>
                        <select className="form-control" id="bill_status" required
                            onChange={inputChange('bill_status')} value={data.bill_status} >
                            <option value="">Please select</option>
                            <option value="fail">Payment Fail</option>
                            <option value="pending">Pending</option>
                            <option value="success">Payment Success</option>
                        </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="name"><span>*</span>Bill ID</label>
                    <input type="text" className="form-control" name="bill_id" id="bill_id"
                    placeholder='Bill ID' required                    
                    onChange={inputChange('bill_id')} value={data.bill_id} />
                </div>
                {/* <div className="form-group">
                        <label htmlFor="first_purchase"><span>*</span>Bookchapter First Purchase<span> True:RM150, False:RM70</span></label>
                        <select className="form-control" id="first_purchase" required
                            onChange={inputChange('first_purchase')} value={data.first_purchase} >
                            <option value="">Please select</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>         */}
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