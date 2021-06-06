<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import axiosInstance from '../../../utils/axiosConfig.js';
<<<<<<< HEAD
 
import {Link} from 'react-router-dom';
import './userDashboard.css';
 
=======

import Navbar from './../navbar';
=======
import React from 'react';
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
import Footer from './../footer';
import {Link} from 'react-router-dom';
import './userDashboard.css';

>>>>>>> 2dbc05f (sponsor sign up updated)
import Profile from './profile-sec';
import PromoContent from './promo-content-sec';
import CompetitionMaterial from './competition-material-sec'
import Abstract from './abstract-sec'
import BookChapter from './book-chapter-sec'
import ResearchTeam from './research-team-sec';
<<<<<<< HEAD
 
import PdfAbstract from './pdf-abstract-bookChapter';
import Preview from './preview-sec';
 
=======

import PdfAbstract from './pdf-abstract-bookChapter';

>>>>>>> 2dbc05f (sponsor sign up updated)
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Nav, Row, Col,Card} from "react-bootstrap";
import {FaEdit,FaCertificate,FaBook,FaRegBookmark} from 'react-icons/fa';
import {BsPeopleCircle,BsFiles,BsBookHalf} from "react-icons/bs";
<<<<<<< HEAD
 
function UserDashboard() {
 
=======


function UserDashboard() {

>>>>>>> 2dbc05f (sponsor sign up updated)
////////////////////get login user info (REPLACE THIS)  /////////////////////
<<<<<<< HEAD
  const [user, setUser]=useState([]);
  const [account, setAccount]=useState([]);
  const account_id = localStorage.getItem('user_id');
<<<<<<< HEAD
 
 
  useEffect(() => {
      axiosInstance.get("/api/competitors/read", {params:{account_id:account_id}})
        .then(function(response) {
          setUser(response.data.data);
        }).catch(function(error) {
          console.log(error);
        });
     
      axiosInstance.get("/api/sponsors/read", {params:{account_id:account_id}})
=======

  useEffect(() => {
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
    }, [account_id]);
 
       
//////////////////////////////////////////////////////////////////////////////////
 function welcome(role){
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

    }, []);
=======
  const user = {

      name: 'testuser',
      email: 'test@gmail.com',
      gender: 'male',
      password: 'Oldpassword',
      confirmPassword: '',
      // role:"Sponsor",
      role:"Competitor",


      

      name:'testLeader',
      ic_passport_selection:'NRIC',
      ic_passport_number: '1111111111',
      affiliation:'tester',
      address: 'no111,jln 111, tmn 1111, 11000 ',
      gender: 'FEMALE',

      members:[
        { 
          name: 'John Doe',
          ic_passport_selection: 'NRIC',
          ic_passport_number: '123123123123'
        }
      ],

      company_name:'UM',
      PIC_name: 'PICUser',
      phone: '011111111111',
      company_address: 'UM, Jln Uni, 560000',
      company_website: 'https://www.youtube.com/',
      company_logo:'https://www.w3schools.com/images/w3schools_green.jpg',


   }

>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
//////////////////////////////////////////////////////////////////////////////////

>>>>>>> 2dbc05f (sponsor sign up updated)
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
              <Nav.Link eventKey="Account-Profiles"><BsPeopleCircle size={20}/> Company Profiles</Nav.Link>
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
<<<<<<< HEAD
 
 
  return (
   <>
 
    {welcome(account.role)}
 
=======


  return (
   <>

   <div className="row-username">
       <p>Welcome {user.name}</p>

   </div>  

>>>>>>> 2dbc05f (sponsor sign up updated)
   <div className="wrapper">
       <Tab.Container id="left-tabs-example" defaultActiveKey="Account-Profiles">
          <Row>
            <Col sm={3} className="sidebar-wrapper">
               
<<<<<<< HEAD
               {TabTitles(account.role)}
<<<<<<< HEAD
           
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
=======
=======
               {TabTitles(user.role)}
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
            
            </Col>


            <Col sm={9}>
              <Tab.Content>

                <Tab.Pane eventKey="Account-Profiles">
                
                  <Card>
					<Card.Body>
					<div className="sec-container">
                    <Link to='/user_dashboard/edit_account'>
                      <a className="edit" href=""><FaEdit/> Edit Email</a>
                    </Link>
                    <h2> Account Details</h2>     
>>>>>>> 2dbc05f (sponsor sign up updated)
                    <ul>
                      <li>
                        <p> Email: {user.email} </p>
                      </li>
                      <li>
                        <Link to='/user_dashboard/edit_password'>
<<<<<<< HEAD
<<<<<<< HEAD
                        <button className="edit-button"><FaEdit/> Edit Password</button>
=======
                        <button className="edit-password"><FaEdit/> Edit Password</button>
>>>>>>> 2dbc05f (sponsor sign up updated)
=======
                        <button className="edit-button"><FaEdit/> Edit Password</button>
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
                        </Link>
                      </li>
                    </ul>
                  </div>
<<<<<<< HEAD
          </Card.Body>
        </Card>
 
                  <p/>
 
                  <Card>
          <Card.Body>
=======
					</Card.Body>
				</Card>

                  <p/>

                  <Card>
					<Card.Body>
>>>>>>> 2dbc05f (sponsor sign up updated)
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
 
                </Tab.Pane>
 
                <Tab.Pane eventKey="Promo-Content">
		<Card>
			<Card.Body>
                  <div className="sec-container">
                    <Link to='/user_dashboard/edit_content'>
                      <a className="edit" href="/user_dashboard/edit_content"><FaEdit/> Edit</a>
                    </Link>
                    <h2> Promotional Content</h2>    
                    <PromoContent user={user}/>
                  </div>  
			</Card.Body>
        </Card>
                </Tab.Pane>
 
                <Tab.Pane eventKey="Competition-Material">
			<Card>
			<Card.Body>
=======
                     <Profile user={user} role={account.role}/>     
=======
                     <Profile user={user}/>     
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
                  </div>
				  </Card.Body>
				</Card>

                </Tab.Pane>

                <Tab.Pane eventKey="Promo-Content">
				<Card>
					<Card.Body>
                  <div className="sec-container">
                    <Link to='/user_dashboard/edit_content'>
                      <a className="edit" href=""><FaEdit/> Edit</a>
                    </Link>
                    <h2> Promotional Content</h2>     
                    <PromoContent/>
                  </div>  
				</Card.Body>
				</Card>
                </Tab.Pane>

                <Tab.Pane eventKey="Competition-Material">
<<<<<<< HEAD

>>>>>>> 2dbc05f (sponsor sign up updated)
=======
				<Card>
					<Card.Body>
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
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
                </Tab.Pane>
 
                <Tab.Pane eventKey="Abstract">
		<Card>
			<Card.Body>
=======
                    <h5> Competition Material</h5>     
=======
                    <h2> Competition Material</h2>     
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
                    <CompetitionMaterial/>
                  </div>  
				  </Card.Body>
				</Card>
                </Tab.Pane>

                <Tab.Pane eventKey="Abstract">
<<<<<<< HEAD

>>>>>>> 2dbc05f (sponsor sign up updated)
=======
				<Card>
					<Card.Body>
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
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
                    <Abstract/>
                  </div>  
>>>>>>> 2dbc05f (sponsor sign up updated)
=======
                    <h2> Abstract </h2>     
                    <Abstract/>
                  </div>
				  </Card.Body>
				</Card>

				<p/>

>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
                  <div className="sec-container">
				  <Card>
					<Card.Body>
                   <Link to='/user_dashboard/edit_book_chapter'>
                      <a className="edit" href=""><FaEdit/> Edit</a>
                    </Link>
<<<<<<< HEAD
<<<<<<< HEAD
                    <h2> BookChapter </h2>    
                    <BookChapter user={user}/>
                  </div>
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
                </Tab.Pane>
 
               
 
                <Tab.Pane eventKey="Research-Team">
 
		<Card>
			<Card.Body>
=======
                    <h5> BookChapter </h5>     
=======
                    <h2> BookChapter </h2>     
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
                    <BookChapter/>
					</Card.Body>
				</Card>

				<Card>
					<Card.Body>
                     <PdfAbstract/>
					 </Card.Body>
				</Card>
                  </div>

                </Tab.Pane>

                

                <Tab.Pane eventKey="Research-Team">
<<<<<<< HEAD

>>>>>>> 2dbc05f (sponsor sign up updated)
=======
				<Card>
					<Card.Body>
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
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
                </Tab.Pane>
 
                <Tab.Pane eventKey="Cert">
		<Card>
			<Card.Body>
                  <div className="sec-container">
                    <h2> Download Certification</h2>    
                   
                    <h5>Coming Soon</h5>
                   
                  </div>  
			</Card.Body>
        </Card>
                </Tab.Pane>
 
              </Tab.Content>
            </Col>
 
          </Row>
        </Tab.Container>
 
    </div>
 
   
    
   
  </>
  );
 
}
 
=======
                    <h5> Research Team</h5>     
=======
                    <h2> Research Team</h2>     
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
                    <ResearchTeam/>
                  </div>  
				  </Card.Body>
				</Card>
                </Tab.Pane>

                <Tab.Pane eventKey="Cert">
				<Card>
					<Card.Body>
                  <div className="sec-container">
                    <h2> Download Certification</h2>     
                    
                    <h5>Coming Soon</h5>
                   
                  </div>  
				</Card.Body>
				</Card>
                </Tab.Pane>

              </Tab.Content>
            </Col>

          </Row>
        </Tab.Container>


 

    </div>
  
    
    <Footer/>
    
  </>
  );

}

>>>>>>> 2dbc05f (sponsor sign up updated)
export default UserDashboard;