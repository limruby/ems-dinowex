import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import logo from "../../../assets/img/Dinowex.png";
import "../../../assets/css/agency.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { isAuth, isAdmin } from '../../../utils/isAuth'
import axiosInstance from '../../../utils/axiosConfig';
require('dotenv').config();

const Navigationbar = props => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [lobby, setLobby] = useState([]);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton();

    axiosInstance.get("/api/formLink/read")
      .then(function (response) {
        setLobby(response.data.data[0].lobby);
      }).catch(function (error) {
        console.log(error);
      })
  }, []);

  const history = useHistory();
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  
  const displayLobby = () => {
    var section = [];
    if (lobby) {
      section.push(
        <li className="nav-item">
          <NavDropdown className="btn" title="Event Lobby" onToggle={() => { window.location.href = '/eventLobby' }}
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}>
            <NavDropdown.Item href="/sponsor_hall" >Sponsor Hall</NavDropdown.Item>
            <NavDropdown.Item href="/competition_hall">Competition Hall</NavDropdown.Item>
          </NavDropdown>
        </li>
         )
      }
    return section;
  }

  const displayRegistration = () => {
    var section = [];
    if (!lobby) {
      section.push(
        <li className="nav-item">
        <Link className="btn" to='/sign_up'>Registration</Link>
        </li>
        )
    }
    return section;
  }




  window.addEventListener('resize', showButton);


  if (isAdmin() === true) {
    return (
      <IconContext.Provider value={{ color: '#000' }}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              <img src={logo} height="50px" width="200px" alt="" />
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link className="btn" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <NavDropdown className="btn" title="Event Lobby" onToggle={() => { window.location.href = '/eventLobby' }}
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}>
                  <NavDropdown.Item href="/sponsor_hall" >Sponsor Hall</NavDropdown.Item>
                  <NavDropdown.Item href="/competition_hall">Competition Hall</NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item">
                <Link className="btn" to='/admin_dashboard'>AdminDashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="btn" to='' onClick={logout}>Log Out</Link>
              </li>
            </ul>
          </Nav>
        </Navbar>
      </IconContext.Provider>
    );
  }
  else if (isAuth() === true) {
    return (
      <IconContext.Provider value={{ color: '#000' }}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              <img src={logo} height="50px" width="200px" alt="" />
            </Link></Navbar.Brand>
          <Nav className="ml-auto">
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link className="btn" to='/'>Home</Link>
              </li>
              {displayLobby()}
              <li className="nav-item">
                <Link className="btn" to='/user_dashboard'>UserDashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="btn" to='' onClick={logout}>Log Out</Link>
              </li>
            </ul>
          </Nav>
        </Navbar>
      </IconContext.Provider>
    );
  }
  else {
    return (
      <IconContext.Provider value={{ color: '#000' }}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              <img src={logo} height="50px" width="200px" alt="" />
            </Link></Navbar.Brand>
          <Nav className="ml-auto">
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link className="btn" to="/">Home</Link>
              </li>
              {displayLobby()}
              {displayRegistration()}
              <li className="nav-item">
                <Link className="btn" to='/sign_in'>Sign In</Link>
              </li>
            </ul>
          </Nav>
        </Navbar>
      </IconContext.Provider>
    );
  }
};
export default Navigationbar;