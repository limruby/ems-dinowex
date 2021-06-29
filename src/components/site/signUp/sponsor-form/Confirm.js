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
                address_1,
                address_2,
                postcode,
                city,
                state,
                country, 
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
            address_1: address_1,
            address_2: address_2,
            postcode: postcode,
            city: city,
            state: state,
            country,
            company_contact: company_contact,
            company_website: company_website,
            category: category
        };
        var account_id="";
        var url=""
        if (data.category === "Bronze Package"){
             url = `${process.env.REACT_APP_BILLPLZ_BRONZE}`
        }
        else if(data.category === "Silver Package"){
             url = `${process.env.REACT_APP_BILLPLZ_SILVER}`
        }
        else if(data.category === "Gold Package"){
             url = `${process.env.REACT_APP_BILLPLZ_GOLD}`
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



        var full_address = 
            values.address_1 + "," +
            values.address_2 + "," +
            values.postcode + "," +
            values.city + "," +
            values.state+ "," +
            values.country


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
                    <li className="list-group-item">Company Address: {full_address}</li>
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
