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
import Loader from './../../../site/Loader';
function FormNavigator() {
	////////////////////get login user role /////////////////////
	const [user, setUser] = useState([]);
	const [account, setAccount] = useState([]);
	const account_id = localStorage.getItem('user_id');
	const role = localStorage.getItem('role');
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		axiosInstance.get("/api/accounts/read", { params: { account_id: account_id } })
		.then(function (response) {
			setAccount(response.data.data);
		}).catch(function (error) {
			console.log(error);
		})
		if(role === "Sponsor"){
			axiosInstance.get("/api/sponsors/read", { params: { account_id: account_id } })
			.then(function (response) {
				setUser(response.data.data);
				setLoading(false);
			}).catch(function (error) {
				console.log(error);
			});
		}
		else if(role ==="Competitor"){
		axiosInstance.get("/api/competitors/read", { params: { account_id: account_id } })
			.then(function (response) {
				setUser(response.data.data);				
				setLoading(false);
			}).catch(function (error) {
				console.log(error);
			});
		}
		else if(role ==="Visitors"){
		axiosInstance.get("/api/visitors/read", { params: { account_id: account_id } })
			.then(function (response) {
				setUser(response.data.data);				
				setLoading(false);
			}).catch(function (error) {
				console.log(error);
			});
		}
		else if(role ==="Judge"){
		axiosInstance.get("/api/judge/read", { params: { account_id: account_id } })
			.then(function (response) {
				setUser(response.data.data);				
				setLoading(false);
			}).catch(function (error) {
				console.log(error);
			});
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	//////////////////////////////////////////////////////////////////////////////////
	const location = useLocation();
	const thePath = location.pathname;
	const lastPath = thePath.substring(thePath.lastIndexOf('/') + 1);
	if (lastPath === 'edit_account') {
		return (
			<section className="section-container">
				{loading ? <Loader /> : null}
				<EditAccount data={account} setData={setAccount} />
			</section>
		)
	}
	else if (lastPath === 'edit_password') {
		return (
			<section className="section-container">
				{loading ? <Loader /> : null}
				<EditPassword data={account} setData={setAccount} />
			</section>
		)
	}
	else if (account.role === 'Sponsor') {
		switch (lastPath) {
			case 'edit_profile':
				return (
					<div className="form-main-container">
						{loading ? <Loader /> : null}
						<EditProfileSponsor data={user} setData={setUser} />
					</div>
				)
			case 'edit_content':
				return (
					<section className="section-container">
						{loading ? <Loader /> : null}
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
						{loading ? <Loader /> : null}
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
						{loading ? <Loader /> : null}
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
						{loading ? <Loader /> : null}
						<EditProfileCompetitor data={user} setData={setUser} />
					</div>
				)
			case 'edit_researchTeam':
				return (
					<section className="section-container">
						{loading ? <Loader /> : null}
						<EditResearchTeam data={user} setData={setUser} />
					</section>
				)
			case 'edit_content':
				return (
					<div className="form-main-container">
						{loading ? <Loader /> : null}
						<EditCompetitionMaterial data={user} setData={setUser} />
					</div>
				)
			case 'edit_abstract':
				return (
					<div className="form-main-container">
						{loading ? <Loader /> : null}
						<EditAbstract data={user} setData={setUser} />
					</div>
				)
			case 'edit_book_chapter':
				return (
					<div className="form-main-container">
						{loading ? <Loader /> : null}
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