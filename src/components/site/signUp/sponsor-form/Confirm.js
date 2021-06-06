import React, { Component } from 'react'
import axiosInstance from '../../../../utils/axiosConfig.js';

export class Confirm extends Component {
    continue = async (e) => {
        e.preventDefault();
   {/*     const { 
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
<<<<<<< HEAD
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
=======

        axiosInstance.post('/accounts/signUp', data)
            .then(res=> {
               
                 
            if(res.data._id){
                this.account_id = res.data._id;
                data["account_id"] = this.account_id;

                axiosInstance.post('/sponsors/create', data)
                .then(res=>{
                    console.log(res.data)
                    this.props.nextStep();
                });
             }
             else{
                 alert('Email existed')
             }

        });
       */}                             
       
    };
>>>>>>> 1848300 (validation test complete)
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;
<<<<<<< HEAD
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

=======
        // const { 
        //     values: {email, 
        //         password,
        //         company_name, 
        //         company_pic_name, 
        //         company_contact, 
        //         company_address, 
        //         company_website, 
        //         category}
        // } = this.props;
        var  amount;

        if(values.category === "Gold Package"){                     
              amount= 390.00.toFixed(2);;
        }
        else if (values.category === "Silver Package"){
              amount= 290.00.toFixed(2);;
        }
        else if (values.category === "Bronze Package"){
              amount= 190.00.toFixed(2);;
        }

    var sha1 = require('sha1');
    var hash_value = sha1(values.token + values.cmpy_code + values.zone + values.product_ID + amount);  
    

>>>>>>> 54aefd4 (sponsor payment gateway setup halfway, amount not clear)
        return (
            <div>
                <h1>Confirmation</h1>
                <ul className="list-group">
<<<<<<< HEAD
                    <li className="list-group-item">Company Name: {values.company_name}</li>
                    <li className="list-group-item">PIC Name: {values.company_pic_name}</li>
                    <li className="list-group-item">IC: {values.company_pic_ic}</li>
=======
                    <li className="list-group-item">Company Name: {values.Componentcompany_name}</li>
                    <li className="list-group-item">PIC Name: {values.company_pic_name}</li>
>>>>>>> 54aefd4 (sponsor payment gateway setup halfway, amount not clear)
                    <li className="list-group-item">Email: {values.email}</li>
                    <li className="list-group-item">Phone Number: {values.company_contact}</li>
                    <li className="list-group-item">Company Address: {values.company_address}</li>
                    <li className="list-group-item">Company Website: {values.company_website}</li>
                    <li className="list-group-item">Selected Category: {values.category}</li>
<<<<<<< HEAD
                </ul>

                <br /><br />
=======

                </ul>

                <br /><br />
                <form className="list-group" action="https://uitmpay.uitm.edu.my/otherservices/products/AA04/02/149" method="POST">
                    <input type="text" name="userid" value={values.company_pic_name} hidden/>
                    <input type="text" name="ord_mercref" value= {"iidentex"+values.company_pic_name} hidden/>
                    <input type="text" name="name" value={values.company_pic_name} hidden/>
                    <input type="text" name="ic" value={values.ic_passport_number} hidden/>
                    <input type="text" name="email" value={values.email} hidden />
                    <input type="text" name="phone" value={values.company_contact}  hidden/>
                    <input type="text" name="designation" value={values.company_pic_name}hidden />
                    <input type="text" name="address" value={values.company_address}  hidden/>

                    <input type="text" name="hash_value" value={hash_value}hidden/>
                    <input type="number" name="amount" value={amount} hidden />
>>>>>>> 54aefd4 (sponsor payment gateway setup halfway, amount not clear)
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn btn-primary" onClick={this.continue}>Confirm</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default Confirm
