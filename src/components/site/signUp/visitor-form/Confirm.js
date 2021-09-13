import React, { Component } from 'react';
import axiosInstance from '../../../../utils/axiosConfig.js';
require('dotenv').config();

export class Confirm extends Component {

    continue = async (e) => {
        e.preventDefault();
        const { 
            values: {
                email,
                password,
                confirmPassword,
                role,
                amount,
                name,
                ic_passport_selection,
                ic_passport_number,                
                gender,
                phone_no,
                address_1,
                address_2,
                postcode,
                city,
                state,
                country,}
            } = this.props;

            var data = {
                role:"Visitor",
                email: email,
                password: password,
                name: name,
                nric_passport_selection:ic_passport_selection,
                nric_passport_no: ic_passport_number,                
                address_1: address_1,
                address_2: address_2,
                postcode: postcode,
                city: city,
                state: state,
                country: country,
                gender:gender,
                contact:phone_no
            };
            var url=`${process.env.REACT_APP_BILLPLZ_VISITOR}`
            
            var account_id="";

            axiosInstance.post('/api/accounts/signUp', data)
            .then(res=> {


                if(res.data._id){
                    this.account_id = res.data._id;
                    data["account_id"] = this.account_id;
                    axiosInstance.post('/api/visitors/create', data)
                    .then(res=>{
                    //save user_ID to localstorage

                    localStorage.setItem('visitor_id', JSON.stringify(res.data._id));                     
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
            <section className="section-container" style={{marginBottom:"5%"}}>
            <div className="form-container" >
                <h1>Confirmation</h1>

                <ul class="list-group">
                    <li class="list-group-item">Name: {values.name}</li>
                    <li class="list-group-item">Email: {values.email}</li>
                    <li class="list-group-item">Contact Number: {values.phone_no}</li>                    
                    <li class="list-group-item">NRIC/Passport Number: {values.ic_passport_number}</li>                    
                    <li class="list-group-item">Address:{full_address} </li>
                    <li class="list-group-item">Gender: {values.gender}</li>                    
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