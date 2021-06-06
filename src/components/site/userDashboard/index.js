import React, {useState, useEffect} from 'react';
import axiosInstance from '../../../utils/axiosConfig.js';
<<<<<<< HEAD
<<<<<<< HEAD
 
=======

=======
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
import Footer from './../footer';
>>>>>>> 7c0a793 (merged with alexia's branch)
import {Link} from 'react-router-dom';
import './userDashboard.css';
 
import Profile from './profile-sec';
import PromoContent from './promo-content-sec';
import CompetitionMaterial from './competition-material-sec';
import Abstract from './abstract-sec';
import BookChapter from './book-chapter-sec';
import ResearchTeam from './research-team-sec';
 
import PdfAbstract from './pdf-abstract-bookChapter';
<<<<<<< HEAD
import Preview from './preview-sec';
=======
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Nav, Row, Col,Card} from "react-bootstrap";
import {FaEdit,FaCertificate,FaBook,FaRegBookmark} from 'react-icons/fa';
import {BsPeopleCircle,BsFiles,BsBookHalf} from "react-icons/bs";
<<<<<<< HEAD
<<<<<<< HEAD
 
=======

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
function UserDashboard() {
 
////////////////////get login user info (REPLACE THIS)  /////////////////////
  const [user, setUser]=useState([]);
  const [account, setAccount]=useState([]);
  const account_id = localStorage.getItem('user_id');
<<<<<<< HEAD
<<<<<<< HEAD
 
 
  useEffect(() => {
      axiosInstance.get("/api/competitors/read", {params:{account_id:account_id}})
=======

=======
 
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
  useEffect(() => {
<<<<<<< HEAD
      axiosInstance .get("/competitors/read", {params:{account_id:account_id}})
>>>>>>> 7c0a793 (merged with alexia's branch)
=======
      axiosInstance.get("/competitors/read", {params:{account_id:account_id}})
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
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
      
=======
     
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
      axiosInstance.get("/sponsors/read", {params:{account_id:account_id}})
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
        .then(function(response) {
          setUser(response.data.data);
        }).catch(function(error) {
          console.log(error);
        });
 
<<<<<<< HEAD
      axiosInstance.get("/api/accounts/read", {params:{account_id:account_id}})
=======

<<<<<<< HEAD
      axiosInstance .get("/accounts/read", {params:{account_id:account_id}})
>>>>>>> 7c0a793 (merged with alexia's branch)
=======
=======
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
      axiosInstance.get("/accounts/read", {params:{account_id:account_id}})
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
        .then(function(response) {
          setAccount(response.data.data);
        }).catch(function(error) {
          console.log(error);
        })
<<<<<<< HEAD
<<<<<<< HEAD
    }, [account_id]);
 
       
=======

<<<<<<< HEAD
    }, []);
>>>>>>> 7c0a793 (merged with alexia's branch)
=======

    }, [account_id]);
>>>>>>> d6169f2 (sponsor edit profile can fetch data)
=======
    }, [account_id]);
 
       
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
//////////////////////////////////////////////////////////////////////////////////
<<<<<<< HEAD
 function welcome(role){
<<<<<<< HEAD
<<<<<<< HEAD
        switch(role){
                case 'Sponsor':
        return (
                        <div className="row-username">
                                <p>Welcome {user.company_name}</p>
                        </div>);
 
                case 'Competitor':
                return (
                        <div className="row-username">
                                <p>Welcome {user.name}</p>
                        </div>);
                default:
        return (
                        <div className="row-username">
                                <p>Welcome back</p>
                        </div>);
        }
 }
 
=======
=======
function welcome(role){
>>>>>>> 335f562 (testing with uploadfilehandler)
	switch(role){
		case 'Sponsor':
=======
        switch(role){
                case 'Sponsor':
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
        return (
                        <div className="row-username">
                                <p>Welcome {user.company_name}</p>
                        </div>);
 
                case 'Competitor':
                return (
                        <div className="row-username">
                                <p>Welcome {user.name}</p>
                        </div>);
                default:
        return (
                        <div className="row-username">
                                <p>Welcome back</p>
                        </div>);
        }
 }
<<<<<<< HEAD

>>>>>>> 85998ee (welcome back xxx)
=======
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
  function TabTitles(role){
    switch(role){
      case 'Sponsor':
        return (
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="Account-Profiles"><BsPeopleCircle size={20}/> Company Profiles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Promo-Content"><BsFiles size={20}/> Promotional Content</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Cert"><FaCertificate size={20}/> Certificate</Nav.Link>
            </Nav.Item>
          </Nav>
        );
      case 'Competitor':
        return (
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="Account-Profiles"><BsPeopleCircle size={20}/> Profiles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Competition-Material"><BsFiles size={20}/> Competition Material</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Abstract"><FaBook size={20}/> Abstract</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Research-Team"><FaRegBookmark size={20}/> Research Team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Cert"><FaCertificate size={20}/> Certificate</Nav.Link>
            </Nav.Item>
          </Nav>
        );
      default:
        return '';
    }
  }
 
 
  return (
   <>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
 
    {welcome(account.role)}
 
=======
   <Navbar/>
=======
>>>>>>> d6169f2 (sponsor edit profile can fetch data)

   {welcome(account.role)} 

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
 
    {welcome(account.role)}
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
   <div className="wrapper">
       <Tab.Container id="left-tabs-example" defaultActiveKey="Account-Profiles">
          <Row>
            <Col sm={3} className="sidebar-wrapper">
               
               {TabTitles(account.role)}
<<<<<<< HEAD
<<<<<<< HEAD
           
=======
            
>>>>>>> 7c0a793 (merged with alexia's branch)
=======
           
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
            </Col>
 
 
            <Col sm={9}>
              <Tab.Content>
 
                <Tab.Pane eventKey="Account-Profiles">
               
                  <Card>
          <Card.Body>
          <div className="sec-container">
                    <Link to='/user_dashboard/edit_account'>
                      <a className="edit" href="/user_dashboard/edit_account"><FaEdit/> Edit Email</a>
                    </Link>
                    <h2> Account Details</h2>    
                    <ul>
                      <li>
                        <p> Email: {account.email} </p>
                      </li>
                      <li>
                        <Link to='/user_dashboard/edit_password'>
                        <button className="edit-password"><FaEdit/> Edit Password</button>
                        </Link>
                      </li>
                    </ul>
                  </div>
          </Card.Body>
        </Card>
<<<<<<< HEAD
<<<<<<< HEAD
 
=======

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
                  <p/>
 
                  <Card>
          <Card.Body>
                  <div className="sec-container">
                    <Link to='/user_dashboard/edit_profile'>
                      <a className="edit" href="/user_dashboard/edit_profile"><FaEdit/> Edit</a>
                    </Link>
                    <h2> Profile </h2>  
<<<<<<< HEAD
<<<<<<< HEAD
                     <Profile user={user} role={account.role}/>    
                  </div>
          </Card.Body>
        </Card>
 
=======
                     <Profile user={user} role={account.role}/>     
                  </div>
          </Card.Body>
        </Card>

>>>>>>> 7c0a793 (merged with alexia's branch)
                </Tab.Pane>
 
                <Tab.Pane eventKey="Promo-Content">
<<<<<<< HEAD
		<Card>
			<Card.Body>
=======

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
                     <Profile user={user} role={account.role}/>    
                  </div>
          </Card.Body>
        </Card>
 
                </Tab.Pane>
 
                <Tab.Pane eventKey="Promo-Content">
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
                  <div className="sec-container">
                    <Link to='/user_dashboard/edit_content'>
                      <a className="edit" href="/user_dashboard/edit_content"><FaEdit/> Edit</a>
                    </Link>
<<<<<<< HEAD
<<<<<<< HEAD
                    <h2> Promotional Content</h2>    
                    <PromoContent user={user}/>
                  </div>  
			</Card.Body>
        </Card>
=======
                    <h5> Promotional Content</h5>     
                    <PromoContent user={user}/>
                  </div>  

>>>>>>> 7c0a793 (merged with alexia's branch)
                </Tab.Pane>
 
                <Tab.Pane eventKey="Competition-Material">
<<<<<<< HEAD
			<Card>
			<Card.Body>
=======

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
                    <h5> Promotional Content</h5>    
                    <PromoContent user={user}/>
                  </div>  
 
                </Tab.Pane>
 
                <Tab.Pane eventKey="Competition-Material">
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
                  <div className="sec-container">
                    <Link to='/user_dashboard/edit_content'>
                      <a className="edit" href=""><FaEdit/> Edit</a>
                    </Link>
<<<<<<< HEAD
<<<<<<< HEAD
                    <h2> Competition Material</h2>    
                    <CompetitionMaterial user={user}/>
                  </div>  
			</Card.Body>
        </Card>
=======
                    <h5> Competition Material</h5>     
                    <CompetitionMaterial user={user}/>
                  </div>  

>>>>>>> 7c0a793 (merged with alexia's branch)
                </Tab.Pane>
 
                <Tab.Pane eventKey="Abstract">
<<<<<<< HEAD
		<Card>
			<Card.Body>
=======

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
                    <h5> Competition Material</h5>    
                    <CompetitionMaterial user={user}/>
                  </div>  
 
                </Tab.Pane>
 
                <Tab.Pane eventKey="Abstract">
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
                  <div className="sec-container">
                   <Link to='/user_dashboard/edit_abstract'>
                      <a className="edit" href=""><FaEdit/> Edit</a>
                    </Link>
<<<<<<< HEAD
<<<<<<< HEAD
                    <h2> Abstract </h2>    
                    <Abstract user={user}/>
                  </div> 
			</Card.Body>
        </Card>

		<p/>

		<Card>
			<Card.Body>
=======
                    <h5> Abstract </h5>     
=======
                    <h5> Abstract </h5>    
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
                    <Abstract/>
                  </div>  
>>>>>>> 7c0a793 (merged with alexia's branch)
                  <div className="sec-container">
                   <Link to='/user_dashboard/edit_book_chapter'>
                      <a className="edit" href=""><FaEdit/> Edit</a>
                    </Link>
<<<<<<< HEAD
<<<<<<< HEAD
                    <h2> BookChapter </h2>    
                    <BookChapter user={user}/>
=======
                    <h5> BookChapter </h5>     
=======
                    <h5> BookChapter </h5>    
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
                    <BookChapter/>
                     <PdfAbstract/>
>>>>>>> 7c0a793 (merged with alexia's branch)
                  </div>
<<<<<<< HEAD
			</Card.Body>
        </Card>
        <p/>
        <Card>
			<Card.Body>
                  <div className="sec-container">
                    <h2> Preview </h2>    
                    <Preview user={user}/>
                  </div>
			</Card.Body>
        </Card>
		<p/>
		<PdfAbstract user = {user}/>
=======
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
                </Tab.Pane>
 
               
 
                <Tab.Pane eventKey="Research-Team">
<<<<<<< HEAD
<<<<<<< HEAD
 
		<Card>
			<Card.Body>
=======

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
                  <div className="sec-container">
                   <Link to='/user_dashboard/edit_researchTeam'>
                      <a className="edit" href=""><FaEdit/> Edit</a>
                    </Link>
<<<<<<< HEAD
<<<<<<< HEAD
                    <h2> Research Team</h2>    
                    <ResearchTeam user={user}/>
                  </div>  
			</Card.Body>
        </Card>
=======
                    <h5> Research Team</h5>     
                    <ResearchTeam/>
                  </div>  

>>>>>>> 7c0a793 (merged with alexia's branch)
                </Tab.Pane>
 
                <Tab.Pane eventKey="Cert">
<<<<<<< HEAD
		<Card>
			<Card.Body>
                  <div className="sec-container">
                    <h2> Download Certification</h2>    
                   
                    <h5>Coming Soon</h5>
                   
                  </div>  
			</Card.Body>
        </Card>
=======

=======
                    <h5> Research Team</h5>    
                    <ResearchTeam/>
                  </div>  
 
                </Tab.Pane>
 
                <Tab.Pane eventKey="Cert">
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
                  <div className="sec-container">
                    <h5> Download Certification</h5>    
                   
                    <h2>Coming Soon</h2>
                   
                  </div>  
<<<<<<< HEAD

>>>>>>> 7c0a793 (merged with alexia's branch)
=======
 
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
                </Tab.Pane>
 
              </Tab.Content>
            </Col>
 
          </Row>
        </Tab.Container>
 
<<<<<<< HEAD
    </div>
 
   
    
=======
 
 
 
    </div>
 
   
    <Footer/>
>>>>>>> 28aeaaf (sponsor video and poster, upload and delete)
   
  </>
  );
 
}
 
export default UserDashboard;