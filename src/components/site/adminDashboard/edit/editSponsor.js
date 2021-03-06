import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import Loader from './../../../site/Loader';


function EditProfile() {
    localStorage.setItem("activeKeys", "Sponsor")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        company_name:'',
        company_pic_name:'',
        company_contact:'',
        category:'',
        bill_status: '',
        bill_id:'',
        amount:'',
    });
    const location = useLocation();
    const thePath = location.pathname;
    const user_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"'+ user_id +'"'
    
    useEffect(() => {
        setLoading(true);
        axiosInstance.get("/api/sponsors/read", {params:{account_id:string}})
        .then(function(response) {
            setData(response.data.data);
            setLoading(false);
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
    setLoading(true);
    // perform all neccassary validations
    if (data.company_name === ""||data.company_pic_name ===""||data.company_contact ===""||data.category===""||data.amount===""
        ){
        alert("Form not fill");
}
else{
            ///////update to db /////////////
             var postData = {
                 _id : data._id,
                 company_name : data.company_name,
                 company_pic_name : data.company_pic_name,
                 company_contact : data.company_contact,
                 category: data.category,
                 amount: data.amount, 
                 bill_status: data.bill_status,
                 bill_id: data.bill_id,                
             }

             axiosInstance.post("/api/sponsors/update", postData)
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
        <form onSubmit={handleForm} action="/uploadfile" enctype="multipart/form-data" method="POST">
        {loading ? <Loader /> : null}
        <div className="edit-form-container" style={{marginTop:"5%", marginBottom:"5%"}}>
                <h1 className="mb-5">Edit Profile Info</h1>
 
              
                 <div className="form-group">
                    <label htmlFor="company_name"><span>*</span>Company Name (as per SME license)</label>
                    <input type="text" className="form-control" name="company_name" id="company_name"
                    placeholder='Company Name' required
                    onChange={inputChange('company_name')} value={data.company_name} />
                </div>
                <div className="form-group">
                    <label htmlFor="category"><span>*</span>Category</label>
                    <select className="form-control" id="category" required
                    onChange={inputChange('category')} value={data.category} >
                        <option value="">Please select</option>
                        <option value="VIP Package">VIP Package (Bypass Billplz)</option>
                        <option value="Gold Package">Gold Package</option>
                        <option value="Silver Package">Silver Package</option>
                        <option value="Bronze Package">Bronze Package</option>
                    </select> 
                </div>
                <div className="form-group">
                    <label htmlFor="amount"><span>*</span>Amount (RM)</label>
                    <input className="form-control" type='text' name='amount' id="amount"
                    placeholder='amount' required
                    onChange={inputChange('amount')} value={data.amount} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company_pic_name"><span>*</span>Full Name of Person In Charge (PIC)</label>
                    <input className="form-control" type='text' name='company_pic_name' id="company_pic_name"
                    placeholder='Full Name of PIC' required
                    onChange={inputChange('company_pic_name')} value={data.company_pic_name} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company_contact"><span>*</span>Contact Number</label>
                    <input className="form-control" type='text' name='company_contact' id="company_contact"
                    placeholder='Contact Number' required
                    onChange={inputChange('company_contact')} value={data.company_contact} 
                    />
                </div> 
                <div className="form-group">
                        <label htmlFor="bill_status">Payment Verify</label>
                        <select className="form-control" id="bill_status" 
                            onChange={inputChange('bill_status')} value={data.bill_status} >
                            <option value="">Please select</option>
                            <option value="false">Payment Fail</option>
                            <option value="pending">Pending</option>
                            <option value="true">Payment Success</option>
                        </select>
                    </div>
                    <div className="form-group">
                    <label htmlFor="name">Bill ID</label>
                    <input type="text" className="form-control" name="bill_id" id="bill_id"
                    placeholder='Bill ID'                     
                    onChange={inputChange('bill_id')} value={data.bill_id} />
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
