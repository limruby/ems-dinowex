import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Category from './Category';
import Profiles from './Profiles';
import TeamProfiles from './TeamProfiles';
import Confirm from './Confirm';
<<<<<<< HEAD
=======
import Success from './Success';
import CompPay from './competitor_payment';
>>>>>>> b231f77 (https done but CORS issue for payment)

export class CompetitorForm extends Component {
    state = {
        step: 1,

        email: '',
        password: '',
        confirmPassword: '',

        role: 'competitor',
        category:'',

        no_of_team_members:'',

        name:'',
        ic_passport_selection:'',
        ic_passport_number: '',
        affiliation:'',
        address: '',
        gender: '',
        phone_no:'',

        members:[],

        name_2:'',
        ic_passport_selection_2:'',
        ic_passport_number_2: '',


        name_3:'',
        ic_passport_selection_3:'',
        ic_passport_number_3: '',


        name_4:'',
        ic_passport_selection_4:'',
        ic_passport_number_4: '',


        name_5:'',
        ic_passport_selection_5:'',
        ic_passport_number_5: ''
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
            , no_of_team_members,members, name_2, ic_passport_selection_2, ic_passport_number_2, name_3, ic_passport_selection_3, ic_passport_number_3, name_4, ic_passport_selection_4, ic_passport_number_4
            , name_5, ic_passport_selection_5, ic_passport_number_5} = this.state;
        const values = { email, password, confirmPassword, role, category , name, phone_no,ic_passport_selection, ic_passport_number, affiliation, address, gender
            , no_of_team_members,members, name_2, ic_passport_selection_2, ic_passport_number_2, name_3, ic_passport_selection_3, ic_passport_number_3, name_4, ic_passport_selection_4, ic_passport_number_4
            , name_5, ic_passport_selection_5, ic_passport_number_5};

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


            // case 4:
            //     return (
            //         <TeamProfiles
            //             nextStep={this.nextStep}
            //             prevStep={this.prevStep}
            //             inputChange={this.inputChange}
            //             values={values}
            //         />
            //     );

            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
<<<<<<< HEAD
                default:
                    
=======
                case 5:
                return (
                    <CompPay 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                );
            case 6:
                return (
                    <Success />
                );
>>>>>>> b231f77 (https done but CORS issue for payment)
        }
    }
}

export default CompetitorForm;