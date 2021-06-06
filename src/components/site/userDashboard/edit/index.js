import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import './form.css';

import EditAccount from './editAccount.js';
import EditPassword from './editPassword.js';
import EditProfile_C from './editProfile-Competitor.js';
import EditProfile_S from './editProfile-Sponsor.js';
import EditResearchTeam from './editResearchTeam.js';
import EditPromoContent from './editPromoContent.js';
import EditCompetitionMaterial from './editCompetitionMaterial.js';
import EditAbstract from './editAbstract.js';
import EditBookChapter from './editBookChapter.js';


<<<<<<< HEAD
=======


>>>>>>> 2dbc05f (sponsor sign up updated)
function FormNavigator() {


////////////////////get login user role /////////////////////
  const [user, setUser]=useState([]);
  const [account, setAccount]=useState([]);
  const account_id = localStorage.getItem('user_id');

  useEffect(() => {
<<<<<<< HEAD
      axiosInstance.get("/api/competitors/read", {params:{account_id:account_id}})
        .then(function(response) {
          setUser(response.data.data);
        }).catch(function(error) {
          console.log(error);
        });
	axiosInstance.get("/api/sponsors/read", {params:{account_id:account_id}})
=======
      axiosInstance .get("/competitors/read", {params:{account_id:account_id}})
>>>>>>> 2dbc05f (sponsor sign up updated)
        .then(function(response) {
          setUser(response.data.data);
        }).catch(function(error) {
          console.log(error);
        });

<<<<<<< HEAD
      axiosInstance.get("/api/accounts/read", {params:{account_id:account_id}})
=======
      axiosInstance .get("/accounts/read", {params:{account_id:account_id}})
>>>>>>> 2dbc05f (sponsor sign up updated)
        .then(function(response) {
          setAccount(response.data.data);
        }).catch(function(error) {
          console.log(error);
        })

<<<<<<< HEAD
    },[]);
//////////////////////////////////////////////////////////////////////////////////
const location = useLocation();
const thePath = location.pathname;
const lastPath = thePath.substring(thePath.lastIndexOf('/') + 1);


	if(lastPath === 'edit_account'){
=======
    }, []);


//////////////////////////////////////////////////////////////////////////////////
const location = useLocation();
const thePath = location.pathname;
const lastPath = thePath.substring(thePath.lastIndexOf('/') + 1)
	

	if(lastPath =='edit_account'){
>>>>>>> 2dbc05f (sponsor sign up updated)
		return( 
		    <div className="form-main-container">
				<EditAccount data={account} setData={setAccount}/>
			</div>
		)
	}
<<<<<<< HEAD
	else if(lastPath === 'edit_password'){
		return( 
		    <div className="form-main-container">
				<EditPassword data={account} setData={setAccount}/>
			</div>
		)
	}
	else if (account.role === 'Sponsor'){
=======
	else if(lastPath =='edit_password'){
		return( 
		    <div className="form-main-container">
				<EditPassword/>
			</div>
		)
	}
	else if (account.role=='Sponsor'){
>>>>>>> 2dbc05f (sponsor sign up updated)
		switch(lastPath){
			case 'edit_profile':
				return( 
				    <div className="form-main-container">
<<<<<<< HEAD
						<EditProfile_S data={user} setData={setUser}/>
=======
						<EditProfile_S/>
>>>>>>> 2dbc05f (sponsor sign up updated)
					</div>
				)
			break;

			case 'edit_content':
				return( 
				    <div className="form-main-container">
<<<<<<< HEAD
						<EditPromoContent data={user} setData={setUser}/>
=======
						<EditPromoContent/>
>>>>>>> 2dbc05f (sponsor sign up updated)
					</div>
				)
			break;

			default:
				
		}
	}
<<<<<<< HEAD
	else if (account.role === 'Competitor'){
=======
	else if (account.role=='Competitor'){
>>>>>>> 2dbc05f (sponsor sign up updated)
		switch(lastPath){
			case 'edit_profile':
				return( 
				    <div className="form-main-container">
<<<<<<< HEAD
						<EditProfile_C data={user} setData={setUser}/>
=======
						<EditProfile_C/>
>>>>>>> 2dbc05f (sponsor sign up updated)
					</div>
				)
			break;

			case 'edit_researchTeam':
				return( 
				    <div className="form-main-container">
<<<<<<< HEAD
						<EditResearchTeam data={user} setData={setUser}/>
=======
						<EditResearchTeam/>
>>>>>>> 2dbc05f (sponsor sign up updated)
					</div>
				)
			break;

			case 'edit_content':
				return( 
				    <div className="form-main-container">
<<<<<<< HEAD
						<EditCompetitionMaterial data={user} setData={setUser}/>
=======
						<EditCompetitionMaterial/>
>>>>>>> 2dbc05f (sponsor sign up updated)
					</div>
				)
			break;

			case 'edit_abstract':
				return( 
				    <div className="form-main-container">
<<<<<<< HEAD
						<EditAbstract data={user} setData={setUser}/>
=======
						<EditAbstract/>
>>>>>>> 2dbc05f (sponsor sign up updated)
					</div>
				)
			break;

			case 'edit_book_chapter':
				return( 
				    <div className="form-main-container">
<<<<<<< HEAD
						<EditBookChapter data={user} setData={setUser}/>
=======
						<EditBookChapter/>
>>>>>>> 2dbc05f (sponsor sign up updated)
					</div>
				)
			break;

			default:
				
		}
	}
<<<<<<< HEAD
	else{
		return(
			<></>
		)
	}
}
=======









}


>>>>>>> 2dbc05f (sponsor sign up updated)
export default FormNavigator;