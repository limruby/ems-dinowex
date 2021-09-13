import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Profiles from './Profiles';
import Confirm from './Confirm';

export class VisitorForm extends Component {
    state = {
        step: 1,

        email: '',
        password: '',
        confirmPassword: '',               
    
        name:'',
        ic_passport_selection:'',
        ic_passport_number: '',        
        address_1: '',
        address_2:'',
        postcode:'',
        city:'',
        state:'',
        country:'',
        gender: '',
        phone_no:''
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
        const { email, password, confirmPassword, role,  name, phone_no, ic_passport_selection, ic_passport_number, address_1,
            address_2,
            postcode,
            city,
            state,
            country, 
            gender
            } = this.state;
        const values = { email, password, confirmPassword, role , name, phone_no,ic_passport_selection, ic_passport_number, address_1,
            address_2,
            postcode,
            city,
            state,
            country, 
            gender
            };

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
                return (
                    <Profiles
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );

            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
                default:
                    
        }
    }
}

export default VisitorForm;