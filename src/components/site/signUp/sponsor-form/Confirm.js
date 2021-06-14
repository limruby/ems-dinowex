import React, { Component } from 'react'
import axiosInstance from '../../../../utils/axiosConfig.js';

export class Confirm extends Component {
    continue = async (e) => {
        e.preventDefault();
        const { 
            values: {
                email, 
                password,
                company_name, 
                company_pic_name, 
                company_pic_ic,
                company_contact, 
                company_address, 
                company_website, 
                category
                }
        } = this.props;

        var data = {
            role:"Sponsor",
            email: email,
            password: password,
            company_name: company_name,
            company_pic_name: company_pic_name,
            company_pic_ic:company_pic_ic,
            company_address:company_address,
            company_contact: company_contact,
            company_website: company_website,
            category: category
        };
        var account_id="";
        var url=""
        if (data.category === "Bronze Package"){
             url = "https://www.billplz-sandbox.com/ip52udve6"
        }
        else if(data.category === "Silver Package"){
             url = "https://www.billplz-sandbox.com/urnlfccd7"
        }
        else if(data.category === "Gold Package"){
             url = "https://www.billplz-sandbox.com/nnoul8ls0"
        }
        axiosInstance.post('/api/accounts/signUp', data)
            .then(res=> {
                   
                if(res.data._id){
                    this.account_id = res.data._id;
                    data["account_id"] = this.account_id;
                    axiosInstance.post('/api/sponsors/create', data)
                    .then(res=>{
                        //save user_ID to localstorage
    
                        localStorage.setItem('sponsor_id', JSON.stringify(res.data._id));
                        console.log("Confirm.js SIGN UP PAGE"+ localStorage.getItem('sponsor_id'));  
                        window.open(url,"_self")
                        this.props.nextStep();             
                    });
                 }
                 else{
                    alert('Email existed')
                }  
           });    
       };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;
        const { 
            values: {email, 
                password,
                company_name, 
                company_pic_name, 
                company_pic_ic,
                company_contact, 
                company_address, 
                company_website, 
                category,
                amount
            }
        } = this.props;

        return (
            <section className="section-container">
            <div className="form-container">
                <h1>Confirmation</h1>
                <ul className="list-group">
                    <li className="list-group-item">Company Name: {values.company_name}</li>
                    <li className="list-group-item">PIC Name: {values.company_pic_name}</li>
                    <li className="list-group-item">IC: {values.company_pic_ic}</li>
                    <li className="list-group-item">Email: {values.email}</li>
                    <li className="list-group-item">Phone Number: {values.company_contact}</li>
                    <li className="list-group-item">Company Address: {values.company_address}</li>
                    <li className="list-group-item">Company Website: {values.company_website}</li>
                    <li className="list-group-item">Selected Category: {values.category}</li>
                </ul>

                <br /><br />
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Confirm</button>
                    </div>
                </div>

            </div>
            </section>
        )
    }
}

export default Confirm
