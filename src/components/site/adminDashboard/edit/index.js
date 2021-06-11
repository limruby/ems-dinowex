import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import './adminform.css';

import EditAccount from './editAccount.js';
import EditPassword from './editPassword.js';
import EditProfile_C from './editCompetitor.js';
import EditProfile_S from './editSponsor.js';
import CreateProfile from './createAccount.js';


function FormNavigator() {

// Fetch user ID from URL
const location = useLocation();
const thePath = location.pathname;
const lastPath = thePath.substring(thePath.lastIndexOf('/') + 1);

	if(lastPath === 'edit_account'){
		return( 
		    <div className="form-main-container">
				<EditAccount />
			</div>
		)
	}
	else if(lastPath === 'edit_password'){
		return( 
		    <div className="form-main-container">
				<EditPassword/>
			</div>
		)
	}
	else if (lastPath === 'edit_profile_sponsor'){
		return( 
		    <div className="form-main-container">
				<EditProfile_S/>
			</div>
		)
	}
	else if (lastPath === 'edit_profile_competitor'){
		return( 
		    <div className="form-main-container">
				<EditProfile_C/>
			</div>
		)			
	}
	else if (lastPath === 'create_profile'){
		console.log(lastPath)
		return( 
		    <div className="form-main-container">
				<CreateProfile/>
			</div>
		)			
	}
	else{
		console.log(lastPath)
		return(
			<></>
		)
	}
}
export default FormNavigator;