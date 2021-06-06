import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Category from './Category';
import Profiles from './Profiles';
import TeamProfiles from './TeamProfiles';
import Confirm from './Confirm';
<<<<<<< HEAD
=======
import Success from './Success';
<<<<<<< HEAD
<<<<<<< HEAD
import CompPay from './competitor_payment';
>>>>>>> b231f77 (https done but CORS issue for payment)
=======
>>>>>>> f9183b2 (update changes)
=======
>>>>>>> 8718204 (payment gateway-done)

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

<<<<<<< HEAD
        amount: "150.00",
        phone_no: "123123123",
        cmpy_code : "AA04",
        zone :"02",
        product_ID :"149",
        token :"Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq",









=======
>>>>>>> 54aefd4 (sponsor payment gateway setup halfway, amount not clear)
        
        phone_no: "123123123",
        cmpy_code : "AA04",
        zone :"02",
        product_ID :"149",
        token :"Yb0V3AJkfDqVsJX1K7Hvuj7vPnDFyp8ZFZytBAN6sgGTtas7Fq",









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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const { email, password, confirmPassword, role, category,  name, phone_no, ic_passport_selection, ic_passport_number, affiliation, address, gender
            , no_of_team_members,members, name_2, ic_passport_selection_2, ic_passport_number_2, name_3, ic_passport_selection_3, ic_passport_number_3, name_4, ic_passport_selection_4, ic_passport_number_4
            , name_5, ic_passport_selection_5, ic_passport_number_5} = this.state;
        const values = { email, password, confirmPassword, role, category , name, phone_no,ic_passport_selection, ic_passport_number, affiliation, address, gender
=======
        const { email, password, confirmPassword, role, category,  name, ic_passport_selection, ic_passport_number,phone_no, affiliation, address, gender
            , no_of_team_members,members, name_2, ic_passport_selection_2, ic_passport_number_2, name_3, ic_passport_selection_3, ic_passport_number_3, name_4, ic_passport_selection_4, ic_passport_number_4
            , name_5, ic_passport_selection_5, ic_passport_number_5} = this.state;
        const values = { email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number,phone_no, affiliation, address, gender
>>>>>>> 4ea11f3 (with phone number)
=======
        const { email, password, confirmPassword, role, category,  name, ic_passport_selection, ic_passport_number, affiliation, address, gender
            , no_of_team_members,members, name_2, ic_passport_selection_2, ic_passport_number_2, name_3, ic_passport_selection_3, ic_passport_number_3, name_4, ic_passport_selection_4, ic_passport_number_4
            , name_5, ic_passport_selection_5, ic_passport_number_5,  amount, cmpy_code, zone, product_ID, token, phone_no} = this.state;
        const values = { email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, affiliation, address, gender
>>>>>>> f9183b2 (update changes)
=======
        const { email, password, confirmPassword, role, category,  name, ic_passport_selection, ic_passport_number, affiliation, address, gender
            , no_of_team_members,members, name_2, ic_passport_selection_2, ic_passport_number_2, name_3, ic_passport_selection_3, ic_passport_number_3, name_4, ic_passport_selection_4, ic_passport_number_4
            , name_5, ic_passport_selection_5, ic_passport_number_5,  amount, cmpy_code, zone, product_ID, token, phone_no} = this.state;
        const values = { email, password, confirmPassword, role, category , name, ic_passport_selection, ic_passport_number, affiliation, address, gender
>>>>>>> 8718204 (payment gateway-done)
            , no_of_team_members,members, name_2, ic_passport_selection_2, ic_passport_number_2, name_3, ic_passport_selection_3, ic_passport_number_3, name_4, ic_passport_selection_4, ic_passport_number_4
            , name_5, ic_passport_selection_5, ic_passport_number_5,  amount, cmpy_code, zone, product_ID, token, phone_no};

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
<<<<<<< HEAD
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
=======
            case 5:
>>>>>>> f9183b2 (update changes)
=======
            case 5:
>>>>>>> 8718204 (payment gateway-done)
                return (
                    <Success />
                );
>>>>>>> b231f77 (https done but CORS issue for payment)
        }
    }
}

export default CompetitorForm;