import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../utils/axiosConfig.js';
import { Link } from 'react-router-dom';
import '../../../assets/css/agency.min.css';
import Profile from './profile-sec';
import PromoContent from './promo-content-sec';
import CompetitionMaterial from './competition-material-sec';
import Abstract from './abstract-sec';
import BookChapter from './book-chapter-sec';
import ResearchTeam from './research-team-sec';
import Receipt from './receipt-sec'
import Certificate from './cert-sec.js';
import Cart from './cart-sec'
import EvaluationForm from './evaluation-form-sec'
import PdfAbstract from './pdf-abstract-bookChapter';
import Preview from './preview-sec'; import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Nav, Row, Col, Card } from "react-bootstrap";
import { FaEdit, FaCertificate, FaBook, FaRegBookmark, FaReceipt, FaMedal } from 'react-icons/fa';
import { BsPeople, BsFiles} from "react-icons/bs";
import Loader from './../../site/Loader';
function UserDashboard() {  ////////////////////get login user info (REPLACE THIS)  /////////////////////
  const [user, setUser] = useState([]);
  const [account, setAccount] = useState([]);
  const role = localStorage.getItem('role');
  const account_id = localStorage.getItem('user_id');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosInstance.get("/api/accounts/read", { params: { account_id: account_id } })
      .then(function (response) {
        setAccount(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
    if (role === "Competitor") {
      axiosInstance.get("/api/competitors/read", { params: { account_id: account_id } })
        .then(function (response) {
          setUser(response.data.data);          
          setLoading(false);
        }).catch(function (error) {
          console.log(error);
        });
    }
    else if (role === "Sponsor") {
      axiosInstance.get("/api/sponsors/read", { params: { account_id: account_id } })
        .then(function (response) {
          setUser(response.data.data);
          setLoading(false);
        }).catch(function (error) {
          console.log(error);
        });
    }
    else if (role === "Visitor") {
      axiosInstance.get("/api/visitors/read", { params: { account_id: account_id } })
        .then(function (response) {
          setUser(response.data.data);
          setLoading(false);
        }).catch(function (error) {
          console.log(error);
        })
    }
    else if (role === "Judge") {
      axiosInstance.get("/api/judge/read", { params: { account_id: account_id } })
        .then(function (response) {
          setUser(response.data.data);
          setLoading(false);
        }).catch(function (error)   {
          console.log(error);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //////////////////////////////////////////////////////////////////////////////////
  function welcome(role) {
    switch (role) {
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
      case 'Judge':
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
  function TabTitles(role) {
    switch (role) {
      case 'Sponsor':
        return (
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="Account-Profiles"><BsPeople size={20} /> Company Profiles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Promo-Content"><BsFiles size={20} /> Promotional Content</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Receipt"><FaReceipt size={20} /> Receipt</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Cert"><FaCertificate size={20} /> Certificate</Nav.Link>
            </Nav.Item>
          </Nav>
        );
      case 'Competitor':
        return (
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="Account-Profiles"><BsPeople size={20} /> Profiles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Competition-Material"><BsFiles size={20} /> Competition Material</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Abstract"><FaBook size={20} /> Abstract & Extended Abstract</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Research-Team"><FaRegBookmark size={20} /> Research Team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Receipt"><FaReceipt size={20} /> Receipt</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Cert"><FaCertificate size={20} /> Certificate</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Cart"><FaMedal size={20} /> Products</Nav.Link>
            </Nav.Item>
          </Nav>
        );
      case 'Visitor':
        return (
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="Account-Profiles"><BsPeople size={20} /> Profiles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Receipt"><FaReceipt size={20} /> Receipt</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Cert"><FaCertificate size={20} /> Certificate</Nav.Link>
            </Nav.Item>
          </Nav>
        );
      case 'Judge':
        return (
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="Account-Profiles"><BsPeople size={20} /> Profiles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Evaluation-Table"><FaBook size={20} /> Evaluation Table</Nav.Link>
            </Nav.Item>
          </Nav>
        );
      default:
        return '';
    }
  }
  var activeKeys = ""
  if (localStorage.getItem("activeKeys")) {
    activeKeys = localStorage.getItem("activeKeys");
    localStorage.removeItem("activeKeys")
  }
  else {
    activeKeys = "Account-Profiles"
  }
  return (
    <>
      {loading ? <Loader /> : null}
      {welcome(account.role)}
      <div className="wrapper">
        <Tab.Container id="left-tabs-example" defaultActiveKey={activeKeys}>
          <Row>
            <Col sm={3} className="sidebar-wrapper">
              {TabTitles(account.role)}
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="Account-Profiles">
                  <Card>
                    <Card.Body>
                      <div className="sec-container">
                        <Link to='/user_dashboard/edit_account'>
                          <a className="edit" href="/user_dashboard/edit_account"><FaEdit /> Edit Email</a>
                        </Link>
                        <h2> Account Details</h2>
                        <ul>
                          <li>
                            <p> Email: {account.email} </p>
                          </li>
                          <li>
                            <Link to='/user_dashboard/edit_password'>
                              <button className="edit-button"><FaEdit /> Edit Password</button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Card.Body>
                  </Card>                    <p />                    <Card>
                    <Card.Body>
                      <div className="sec-container">
                        <Link to='/user_dashboard/edit_profile'>
                          <a className="edit" href="/user_dashboard/edit_profile"><FaEdit /> Edit</a>
                        </Link>
                        <h2> Profile </h2>
                        <Profile user={user} role={account.role} />
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="Promo-Content">
                  <Card>
                    <Card.Body>
                      <div className="sec-container">
                        <Link to='/user_dashboard/edit_content'>
                          <a className="edit" href="/user_dashboard/edit_content"><FaEdit /> Edit</a>
                        </Link>
                        <h2> Promotional Content</h2>
                        <PromoContent user={user} />
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="Competition-Material">
                  <Card>
                    <Card.Body>
                      <div className="sec-container">
                        <Link to='/user_dashboard/edit_content' className="edit">
                          <FaEdit /> Edit
                        </Link>
                        <h2> Competition Material</h2>
                        <CompetitionMaterial user={user} />
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>                  <Tab.Pane eventKey="Abstract">
                  <Card>
                    <Card.Body>
                      <div className="sec-container">
                        <Link to='/user_dashboard/edit_abstract' className="edit">
                          <FaEdit /> Edit
                        </Link>
                        <h2> Abstract </h2>
                        <Abstract user={user} />
                      </div>
                    </Card.Body>
                  </Card>                    <p />                    <Card>
                    <Card.Body>
                      <div className="sec-container">
                        <Link to='/user_dashboard/edit_book_chapter' className="edit">
                          <FaEdit /> Edit
                        </Link>
                        <h2> Extended Abstract </h2>
                        <BookChapter user={user} />
                      </div>
                    </Card.Body>
                  </Card>
                  <p />
                  <Card>
                    <Card.Body>
                      <div className="sec-container">
                        <h2> Preview </h2>
                        <Preview user={user} />
                      </div>
                    </Card.Body>
                  </Card>
                  <p />
                  <PdfAbstract user={user} />
                </Tab.Pane>                  <Tab.Pane eventKey="Research-Team">                    <Card>
                  <Card.Body>
                    <div className="sec-container">
                      <Link to='/user_dashboard/edit_researchTeam' className="edit">
                        <FaEdit /> Edit
                      </Link>
                      <h2> Research Team</h2>
                      <ResearchTeam user={user} />
                    </div>
                  </Card.Body>
                </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="Receipt">
                  <Card>
                    <Card.Body>
                      <div className="sec-container">
                        <h2> Download Receipt</h2>
                        <Receipt user={user} />
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="Cert">
                  <Card>
                    <Card.Body>
                      <div className="sec-container">
                        <h2> Download Certification</h2>
                        <Certificate user={user} role={account.role} />
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="Cart">
                  <Card>
                    <Card.Body>
                      <div className="sec-container">
                        <Cart data={user} setData={setUser} user={account} />
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="Evaluation-Table">
                  <Card>
                    <Card.Body>
                      <div className="sec-container">
                        <h2> Evaluation Form</h2>
                        <EvaluationForm />
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
} export default UserDashboard;