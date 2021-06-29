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
                category,
                amount,
                name,
                ic_passport_selection,
                ic_passport_number,
                affiliation,
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
                role:"Competitor",
                email: email,
                password: password,
                name: name,
                category: category,
                nric_passport_selection:ic_passport_selection,
                nric_passport_no: ic_passport_number,
                affiliation: affiliation,
                address_1: address_1,
                address_2: address_2,
                postcode: postcode,
                city: city,
                state: state,
                gender:gender,
                phone_no:phone_no
            };
            var url=""
            if (data.category === "Professional Innovator"){
                url = `${process.env.REACT_APP_BILLPLZ_PRO}`
            }
            else if(data.category === "Junior Innovator"){
                url = `${process.env.REACT_APP_BILLPLZ_JUNIOR}`
            }
            else if(data.category === "Young Innovator"){
                url = `${process.env.REACT_APP_BILLPLZ_YOUNG}`
            }
            var account_id="";

            axiosInstance.post('/api/accounts/signUp', data)
            .then(res=> {


                if(res.data._id){
                    this.account_id = res.data._id;
                    data["account_id"] = this.account_id;
                    axiosInstance.post('/api/competitors/create', data)
                    .then(res=>{
                    //save user_ID to localstorage

                    localStorage.setItem('competitor_id', JSON.stringify(res.data._id));                     
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
        const { 
            values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, affiliation, address, gender
            ,phone_no}
        } = this.props;


        return (
            <section className="section-container" style={{marginBottom:"5%"}}>
            <div className="form-container" >
                <h1>Confirmation</h1>

                <ul class="list-group">
                    <li class="list-group-item">Name: {name}</li>
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Contact Number: {phone_no}</li>
                    <li class="list-group-item">Affiliation: {affiliation}</li>
                    <li class="list-group-item">NRIC/Passport Number: {ic_passport_number}</li>                    
                    <li class="list-group-item">Address: {address}</li>
                    <li class="list-group-item">Gender: {gender}</li>
                    <li class="list-group-item">Selected Category: {category}</li>
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