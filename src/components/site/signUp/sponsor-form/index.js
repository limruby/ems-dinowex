import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Category from './Category';
import Profiles from './Profiles';
import Confirm from './Confirm';
<<<<<<< HEAD
=======
import Success from './Success';
>>>>>>> 2dbc05f (sponsor sign up updated)

export class SponsorForm extends Component {
    state = {
        step: 1,

        email: '',
        password: '',
        confirmPassword: '',
        company_name: '',
        company_pic_name: '',
<<<<<<< HEAD
        company_pic_ic:'',
=======
>>>>>>> 2dbc05f (sponsor sign up updated)
        company_contact: '',
        company_address: '',
        company_website:'',
        company_logo:'',        
        role: 'sponsor',
        category:''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    render() {
        const { step } = this.state;
        const { 
        email,
        password,
        confirmPassword,
        company_name,
        company_pic_name,
<<<<<<< HEAD
        company_pic_ic,
=======
>>>>>>> 2dbc05f (sponsor sign up updated)
        company_contact,
        company_address,
        company_website,
        company_logo,        
        role,
        category} = this.state;
        const values = { 
        email,
        password,
        confirmPassword,
        company_name,
        company_pic_name,
<<<<<<< HEAD
        company_pic_ic,
=======
>>>>>>> 2dbc05f (sponsor sign up updated)
        company_contact,
        company_address,
        company_website,
        company_logo,        
        role,
        category};

        switch (step) {
            case 1:
                return (
                    <AccountSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return(
                    <Category
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                    )

            case 3:
                return (
                    <Profiles
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
<<<<<<< HEAD
=======
            case 5:
                return (
                    <Success />
                );
>>>>>>> 2dbc05f (sponsor sign up updated)
        }
    }
}

<<<<<<< HEAD
export default SponsorForm;
=======
export default SponsorForm;
>>>>>>> 2dbc05f (sponsor sign up updated)
