import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Category from './Category';
import Profiles from './Profiles';
import Confirm from './Confirm';

export class CompetitorForm extends Component {
    state = {
        step: 1,

        email: '',
        password: '',
        confirmPassword: '',

        role: 'competitor',
        category:'',
    
        name:'',
        ic_passport_selection:'',
        ic_passport_number: '',
        affiliation:'',
        address: '',
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
        const { email, password, confirmPassword, role, category,  name, phone_no, ic_passport_selection, ic_passport_number, affiliation, address, gender
            } = this.state;
        const values = { email, password, confirmPassword, role, category , name, phone_no,ic_passport_selection, ic_passport_number, affiliation, address, gender
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
                default:
                    
        }
    }
}

export default CompetitorForm;