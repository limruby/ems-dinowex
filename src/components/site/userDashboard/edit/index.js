import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import '../../../../assets/css/agency.min.css';
import EditAccount from './editAccount.js';
import EditPassword from './editPassword.js';
import EditProfileCompetitor from './editProfile-Competitor.js';
import EditProfileSponsor from './editProfile-Sponsor.js';
import EditProfileVisitor from './editProfile-Visitor.js';
import EditProfileJudge from './editProfile-Judge.js';
import EditResearchTeam from './editResearchTeam.js';
import EditPromoContent from './editPromoContent.js';
import EditCompetitionMaterial from './editCompetitionMaterial.js';
import EditAbstract from './editAbstract.js';
import EditBookChapter from './editBookChapter.js';

function FormNavigator() {
	////////////////////get login user role /////////////////////
	const [user, setUser] = useState([]);
	const [account, setAccount] = useState([]);
	const account_id = localStorage.getItem('user_id');

	useEffect(() => {
		axiosInstance.get("/api/competitors/read", { params: { account_id: account_id } })
			.then(function (response) {
				setUser(response.data.data);
			}).catch(function (error) {
				console.log(error);
			});
		axiosInstance.get("/api/sponsors/read", { params: { account_id: account_id } })
			.then(function (response) {
				setUser(response.data.data);
			}).catch(function (error) {
				console.log(error);
			});
		axiosInstance.get("/api/visitors/read", { params: { account_id: account_id } })
			.then(function (response) {
				setUser(response.data.data);
			}).catch(function (error) {
				console.log(error);
			});
		axiosInstance.get("/api/judge/read", { params: { account_id: account_id } })
			.then(function (response) {
				setUser(response.data.data);
			}).catch(function (error) {
				console.log(error);
			});
		axiosInstance.get("/api/accounts/read", { params: { account_id: account_id } })
			.then(function (response) {
				setAccount(response.data.data);
			}).catch(function (error) {
				console.log(error);
			})
	});
	//////////////////////////////////////////////////////////////////////////////////
	const location = useLocation();
	const thePath = location.pathname;
	const lastPath = thePath.substring(thePath.lastIndexOf('/') + 1);

	if (lastPath === 'edit_account') {
		return (
			<section className="section-container">
				<EditAccount data={account} setData={setAccount} />
			</section>
		)
	}
	else if (lastPath === 'edit_password') {
		return (
			<section className="section-container">
				<EditPassword data={account} setData={setAccount} />
			</section>
		)
	}
	else if (account.role === 'Sponsor') {
		switch (lastPath) {
			case 'edit_profile':
				return (
					<div className="form-main-container">
						<EditProfileSponsor data={user} setData={setUser} />
					</div>
				)
			case 'edit_content':
				return (
					<section className="section-container">

						<EditPromoContent data={user} setData={setUser} />
					</section>
				)
			default:
		}
	}
	else if (account.role === 'Judge') {
		switch (lastPath) {
			case 'edit_profile':
				return (
					<div className="form-main-container">
						<EditProfileJudge data={user} setData={setUser} />
					</div>
				)
			default:
		}
	}
	else if (account.role === 'Visitor') {
		switch (lastPath) {
			case 'edit_profile':
				return (
					<div className="form-main-container">
						<EditProfileVisitor data={user} setData={setUser} />
					</div>
				)
			default:
		}
	}
	else if (account.role === 'Competitor') {
		switch (lastPath) {
			case 'edit_profile':
				return (
					<div className="form-main-container">
						<EditProfileCompetitor data={user} setData={setUser} />
					</div>
				)
			case 'edit_researchTeam':
				return (
					<section className="section-container">

						<EditResearchTeam data={user} setData={setUser} />
					</section>
				)
			case 'edit_content':
				return (
					<div className="form-main-container">
						<EditCompetitionMaterial data={user} setData={setUser} />
					</div>
				)
			case 'edit_abstract':
				return (
					<div className="form-main-container">
						<EditAbstract data={user} setData={setUser} />
					</div>
				)
			case 'edit_book_chapter':
				return (
					<div className="form-main-container">
						<EditBookChapter data={user} setData={setUser} />
					</div>
				)
			default:
		}
	}
	else {
		return (
			<>
			</>
		)
	}
}
export default FormNavigator;