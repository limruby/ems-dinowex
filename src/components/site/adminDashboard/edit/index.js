import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../../../assets/css/agency.min.css';

import EditAccount from './editAccount.js';
import EditPassword from './editPassword.js';
import EditProfile_C from './editCompetitor.js';
import EditProfile_S from './editSponsor.js';
import EditProfile_J from './editJudge.js';
import InsertLink from './insertLink';
import EditPaymentStatus from './editPaymentStatus.js';
import AssignProject from './assignProject.js';
import CreateProfile from './createAccount.js';
import UploadReceiptCompetitor  from './upload_receipt_competitor.js';
import UploadReceiptSponsor  from './upload_receipt_sponsor.js';

function FormNavigator() {

// Fetch user ID from URL
const location = useLocation();
const thePath = location.pathname;
const lastPath = thePath.substring(thePath.lastIndexOf('/') + 1);

	if(lastPath === 'edit_account'){
		return( 
		    <section className="section-container">
				<EditAccount />
				</section>
		)
	}
	else if(lastPath === 'edit_password'){
		return( 
			<section className="section-container">
				<EditPassword/>
			</section>
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
	else if (lastPath === 'edit_profile_judge'){		
		return( 
			<section className="section-container">
				<EditProfile_J/>
			</section>
		)			
	}
	else if (lastPath === 'create_profile'){		
		return( 

			<section className="section-container">
				<CreateProfile/>
			</section>

		)			
	}
	else if (lastPath === 'upload_receipt_competitor'){		
		return( 

			<section className="section-container">
				<UploadReceiptCompetitor/>
			</section>

		)			
	}
	else if (lastPath === 'upload_receipt_sponsor'){		
		return( 

			<section className="section-container">
				<UploadReceiptSponsor/>
			</section>

		)			
	}
	else if (lastPath === 'edit_order_status'){		
		return( 
			<section className="section-container">
				<EditPaymentStatus/>
			</section>
		)			
	}
	else if (lastPath === 'assign_project_title'){		
		return( 
			<section className="section-container">
				<AssignProject/>
			</section>
		)			
	}
	else if (lastPath === 'insert_evaluation_form_link'){		
		return( 
			<section className="section-container">
				<InsertLink/>
			</section>
		)			
	}
	else{
		return(
		<></>
		)
	}
}
export default FormNavigator;