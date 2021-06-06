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
<<<<<<< HEAD
import Content from './editContent.js';
=======
>>>>>>> 248fc10 (added /api/ to axios GET POST)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed


function FormNavigator() {


////////////////////get login user role /////////////////////
  const [user, setUser]=useState([]);
  const [account, setAccount]=useState([]);
  const account_id = localStorage.getItem('user_id');

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      axiosInstance.get("/api/competitors/read", {params:{account_id:account_id}})
=======
      axiosInstance.get("/competitors/read", {params:{account_id:account_id}})
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
      axiosInstance.get("/api/competitors/read", {params:{account_id:account_id}})
>>>>>>> 248fc10 (added /api/ to axios GET POST)
=======
      axiosInstance.get("/api/competitors/read", {params:{account_id:account_id}})
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
        .then(function(response) {
          setUser(response.data.data);
        }).catch(function(error) {
          console.log(error);
        });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	axiosInstance.get("/api/sponsors/read", {params:{account_id:account_id}})
=======
	axiosInstance.get("/sponsors/read", {params:{account_id:account_id}})
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
	axiosInstance.get("/api/sponsors/read", {params:{account_id:account_id}})
>>>>>>> 248fc10 (added /api/ to axios GET POST)
=======
	axiosInstance.get("/api/sponsors/read", {params:{account_id:account_id}})
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
        .then(function(response) {
          setUser(response.data.data);
        }).catch(function(error) {
          console.log(error);
        });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      axiosInstance.get("/api/accounts/read", {params:{account_id:account_id}})
=======
      axiosInstance.get("/accounts/read", {params:{account_id:account_id}})
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
      axiosInstance.get("/api/accounts/read", {params:{account_id:account_id}})
>>>>>>> 248fc10 (added /api/ to axios GET POST)
=======
      axiosInstance.get("/api/accounts/read", {params:{account_id:account_id}})
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
        .then(function(response) {
          setAccount(response.data.data);
        }).catch(function(error) {
          console.log(error);
        })

    },[]);
//////////////////////////////////////////////////////////////////////////////////
const location = useLocation();
const thePath = location.pathname;
const lastPath = thePath.substring(thePath.lastIndexOf('/') + 1);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 7c0a793 (merged with alexia's branch)

<<<<<<< HEAD

=======
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======


>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
	if(lastPath === 'edit_account'){
		return( 
		    <div className="form-main-container">
				<EditAccount data={account} setData={setAccount}/>
			</div>
		)
	}
	else if(lastPath === 'edit_password'){
		return( 
		    <div className="form-main-container">
				<EditPassword data={account} setData={setAccount}/>
			</div>
		)
	}
	else if (account.role === 'Sponsor'){
		switch(lastPath){
			case 'edit_profile':
				return( 
				    <div className="form-main-container">
						<EditProfile_S data={user} setData={setUser}/>
					</div>
				)
			break;

			case 'edit_content':
				return( 
				    <div className="form-main-container">
						<EditPromoContent data={user} setData={setUser}/>
					</div>
				)
			break;

			default:
				
		}
	}
	else if (account.role === 'Competitor'){
		switch(lastPath){
			case 'edit_profile':
				return( 
				    <div className="form-main-container">
						<EditProfile_C data={user} setData={setUser}/>
					</div>
				)
			break;

			case 'edit_researchTeam':
				return( 
				    <div className="form-main-container">
						<EditResearchTeam data={user} setData={setUser}/>
					</div>
				)
			break;

			case 'edit_content':
				return( 
				    <div className="form-main-container">
						<EditCompetitionMaterial data={user} setData={setUser}/>
					</div>
				)
			break;

			case 'edit_abstract':
				return( 
				    <div className="form-main-container">
						<EditAbstract data={user} setData={setUser}/>
					</div>
				)
			break;

			case 'edit_book_chapter':
				return( 
				    <div className="form-main-container">
						<EditBookChapter data={user} setData={setUser}/>
					</div>
				)
			break;

			default:
				
		}
	}
	else{
		return(
			<></>
		)
	}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======









>>>>>>> 7c0a793 (merged with alexia's branch)
=======
>>>>>>> 3e5a50c (remove unnecessary files)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
}
export default FormNavigator;