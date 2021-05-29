import React, { Component } from 'react';

import axiosInstance from '../../../../utils/axiosConfig.js';

export class Confirm extends Component {

    continue = async (e) => {
        e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b81d761 (with payment gateway-half done)
        const { 
            values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, affiliation, address, gender
                , no_of_team_members,members, phone_no}
        } = this.props;
<<<<<<< HEAD

        var data = {
            role:"Competitor",
            email: email,
            password: password,
            name: name,
            category: category,
            nric_passport_selection:ic_passport_selection,
            nric_passport_no: ic_passport_number,
            affiliation: affiliation,
            address:address,
            gender:gender,
            phone_no:phone_no
        };
        var url=""
        if (data.category === "Professional Innovator"){
             url = "https://www.billplz-sandbox.com/_0pbgc2r6"
        }
        else if(data.category === "Junior Innovator"){
             url = "https://www.billplz-sandbox.com/9vpry5o83"
        }
        else if(data.category === "Young Innovator"){
             url = "https://www.billplz-sandbox.com/lew_nvul8"
        }
        var account_id="";

<<<<<<< HEAD
        axiosInstance.post('/api/accounts/signUp', data)
=======
        axiosInstance.post('/accounts/signUp', data)
>>>>>>> 1848300 (validation test complete)
            .then(res=> {
               
                 
            if(res.data._id){
                this.account_id = res.data._id;
                data["account_id"] = this.account_id;
<<<<<<< HEAD
                axiosInstance.post('/api/competitors/create', data)
                .then(res=>{
                    //save user_ID to localstorage

                    localStorage.setItem('competitor_id', JSON.stringify(res.data._id));
                    console.log("Confirm.js SIGN UP PAGE"+ localStorage.getItem('competitor_id'));  
                    window.open(url,"_self")
                    this.props.nextStep();             
=======

                axiosInstance.post('/competitors/create', data)
                .then(res=>{
                    console.log(res.data)
                    this.props.nextStep();
>>>>>>> 1848300 (validation test complete)
                });
             }
             else{
                 alert('Email existed')
             }

        });
                                   
       
=======
        this.props.nextStep();
>>>>>>> b231f77 (https done but CORS issue for payment)
=======
=======
>>>>>>> 8718204 (payment gateway-done)
        // const { 
        //     values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, affiliation, address, gender
        //         , no_of_team_members,members, phone_no}
        // } = this.props;
        // this.props.nextStep();
        // var amount="";
        // var cmpy_code = "AA04";
        // var zone ="02";
        // var product_ID ="149";
        // var token ="Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq";
        // //var pusat_kos ="231000";

        // var hash_value = token + cmpy_code + zone + product_ID + amount;

        // if(category === "Professional Innovator"){
        //     this.setState = ({
        //         hash_value,
        //         amount: 390,
        //       })
        // }
        // else if (category === "Young Innovator"){
        //     this.setState = ({
        //         hash_value,
        //         amount: 390,
        //       })
        // }
        // else if (category === "Junior Innovator"){
        //     amount = 190.00;
        // }
<<<<<<< HEAD
>>>>>>> f9183b2 (update changes)
=======
        this.props.nextStep();
        var amount="";
        var cmpy_code = "AA04";
        var zone ="02";
        var product_ID ="149";
        var token ="Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq";
        //var pusat_kos ="231000";

        var hash_value = token + cmpy_code + zone + product_ID + amount;

        if(category === "Professional Innovator"){
            this.setState = ({
                hash_value,
                amount: 390,
              })
        }
        else if (category === "Young Innovator"){
            this.setState = ({
                hash_value,
                amount: 390,
              })
        }
        else if (category === "Junior Innovator"){
            amount = 190.00;
        }
>>>>>>> b81d761 (with payment gateway-half done)
=======
>>>>>>> 8718204 (payment gateway-done)
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
<<<<<<< HEAD
<<<<<<< HEAD
        const { 
<<<<<<< HEAD
            values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, affiliation, address, gender
            , no_of_team_members,members, phone_no}
=======
            values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, phone_no, affiliation, address, gender
            , no_of_team_members,members}
>>>>>>> 4ea11f3 (with phone number)
        } = this.props;
=======
        const { values, inputChange } = this.props;

        // const { 
        //     values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, phone_no, affiliation, address, gender
        //     , no_of_team_members,members, amount, cmpy_code, zone, product_ID, token}
        // } = this.props;

             // var  amount;

             //    if(values.category === "Professional Innovator"){
                                          
             //          amount= 390;
                      
             //    }
             //    else if (values.category === "Young Innovator"){
             //          amount= 222;
             //    }
             //    else if (values.category === "Junior Innovator"){
             //          amount= 231;
             //    }

             //    var phone ="123123"

>>>>>>> f9183b2 (update changes)
=======
        const { values, inputChange } = this.props;
>>>>>>> 8718204 (payment gateway-done)

        // const { 
        //     values: {email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, phone_no, affiliation, address, gender
        //     , no_of_team_members,members, amount, cmpy_code, zone, product_ID, token}
        // } = this.props;

<<<<<<< HEAD



            var hash_value = values.token + values.cmpy_code + values.zone + values.product_ID + values.amount;  

=======
                var  amount;

                if(values.category === "Professional Innovator"){                     
                      amount= 390.00.toFixed(2);;
                }
                else if (values.category === "Young Innovator"){
                      amount= 290.00.toFixed(2);;
                }
                else if (values.category === "Junior Innovator"){
                      amount= 190.00.toFixed(2);;
                }






            var sha1 = require('sha1');
<<<<<<< HEAD
>>>>>>> 8718204 (payment gateway-done)
=======
            var hash_value = sha1(values.token + values.cmpy_code + values.zone + values.product_ID + amount);  
            
>>>>>>> 2fe0043 (payment gateway css updated)
        return (
            <div>
                <h1>Confirmation</h1>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <form className="list-group" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="post">
                    <input type="text" name="userid" value={values.ic_passport_number} hidden/>
                    <input type="text" name="ord_mercref" value="001" hidden/>
                    <input type="text" name="name" value={values.name} hidden/>
                    <input type="text" name="ic" value={values.ic_passport_number} hidden/>
                    <input type="text" name="email" value={values.email} hidden/>
                    <input type="text" name="phone" value={values.phone_no} hidden/>
                    <input type="text" name="designation" value={values.affiliation} hidden/>
                    <input type="text" name="address" value={values.address} hidden/>

                    <input type="text" name="hash_value" value={hash_value} hidden/>
                    <input type="text" name="amount" value={values.amount} hidden/>
=======
                <form class="list-group" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                    <input type="text" name="userid" value={ic_passport_number} disabled/>
                    <input type="text" name="ord_mercref" value="001" disabled/>
                    <input type="text" name="name" value={name} disabled/>
                    <input type="text" name="ic" value={ic_passport_number} disabled/>
                    <input type="text" name="email" value={email} disabled/>
                    <input type="text" name="phone" value={phone_no} disabled/>
                    <input type="text" name="designation" value={affiliation} disabled/>
                    <input type="text" name="address" value={address} disabled/>

                    <input type="text" name="hash_value" value="" disabled/>
                    <input type="text" name="amount" value="" disabled/>
>>>>>>> b81d761 (with payment gateway-half done)
=======
                <form className="list-group" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                    <input type="text" name="userid" value={values.ic_passport_number} />
                    <input type="text" name="ord_mercref" value= {"iidentex"+values.ic_passport_number} />
                    <input type="text" name="name" value={values.name} />
                    <input type="text" name="ic" value={values.ic_passport_number} />
                    <input type="text" name="email" value={values.email} />
                    <input type="text" name="phone" value={values.phone_no} />
                    <input type="text" name="designation" value={values.affiliation} />
                    <input type="text" name="address" value={values.address} />

                    <input type="text" name="hash_value" value={sha1(hash_value)} />
                    <input type="number" name="amount" value={amount} />
>>>>>>> 8718204 (payment gateway-done)
                    <input type="submit" name="submit" value="Pay" />
    

                  
                  </form>
                  
 {/*               <ul class="list-group">
                    <li class="list-group-item">Name: {name}</li>
                    <li class="list-group-item">Email: {email}</li>
                    <li class="list-group-item">Contact Number: {phone_no}</li>
                    <li class="list-group-item">Affiliation: {affiliation}</li>
                    <li class="list-group-item">NRIC/Passport Number: {ic_passport_number}</li>   
<<<<<<< HEAD
<<<<<<< HEAD
                    <li class="list-group-item">Phone Number: {phone_no}</li> 
=======
    				<li class="list-group-item">Phone Number: {phone_no}</li> 
>>>>>>> b81d761 (with payment gateway-half done)
=======
                    <li class="list-group-item">Phone Number: {phone_no}</li> 
>>>>>>> 8718204 (payment gateway-done)
                    <li class="list-group-item">Address: {address}</li>
                    <li class="list-group-item">Gender: {gender}</li>
                    <li class="list-group-item">Selected Category: {category}</li>
        </ul> */}

=======
                
                  
                <ul class="list-group">
                    <li class="list-group-item">Name: {values.name}</li>
                    <li class="list-group-item">Email: {values.email}</li>
                    <li class="list-group-item">Affiliation: {values.affiliation}</li>
                    <li class="list-group-item">NRIC/Passport Number: {values.ic_passport_number}</li>   
                    <li class="list-group-item">Phone Number: {values.phone_no}</li> 
                    <li class="list-group-item">Address: {values.address}</li>
                    <li class="list-group-item">Gender: {values.gender}</li>
                    <li class="list-group-item">Selected Category: {values.category}</li>
                </ul> 
>>>>>>> 2fe0043 (payment gateway css updated)

                <br /><br />
                <form className="list-group" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                    <input type="text" name="userid" value={values.ic_passport_number} hidden/>
                    <input type="text" name="ord_mercref" value= {"iidentex"+values.ic_passport_number} hidden/>
                    <input type="text" name="name" value={values.name} hidden/>
                    <input type="text" name="ic" value={values.ic_passport_number} hidden/>
                    <input type="text" name="email" value={values.email} hidden />
                    <input type="text" name="phone" value={values.phone_no}  hidden/>
                    <input type="text" name="designation" value={values.affiliation}hidden />
                    <input type="text" name="address" value={values.address}  hidden/>

                    <input type="text" name="hash_value" value={hash_value}hidden/>
                    <input type="number" name="amount" value={amount} hidden />
                <div className="row">    
                    <div className="col-6">
                    <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <input type="submit" className="btn btn-primary"name="submit" value="Make payment" />
                    </div>
                </div>
                  
                  </form>

                
            </div>
        )
    }
}

export default Confirm