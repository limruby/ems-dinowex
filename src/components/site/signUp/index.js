import React, {useState} from 'react';
import FormChange from './form_change';
import Footer from './../footer';
import './form.css';

function Signup() {


  return (
    <>
    
      <div className="signup-main-container">
        <div className="signup-form-container">
          <FormChange value />     
        </div>
      </div>
  
    </>
  );

}

export default Signup;
