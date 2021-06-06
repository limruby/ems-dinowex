import React,{useState, useEffect} from "react";
import { useHistory,Link } from 'react-router-dom';
import "../../../assets/css/agency.min.css";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import NavBar from './../navbar';
>>>>>>> 2dbc05f (sponsor sign up updated)
=======
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
import Footer from './../footer';
import './eventLobby.css';
import sponsor_hall from "../../../assets/img/sponsor_hall.jpg";
import competition_hall from "../../../assets/img/competition_hall.jpg";
import {Image} from 'react-bootstrap';




function EventLobby() {
const history = useHistory();
  return (
    <div className="eventLobby">
<<<<<<< HEAD
<<<<<<< HEAD
  
=======
      <NavBar/>
>>>>>>> 2dbc05f (sponsor sign up updated)
=======
  
>>>>>>> 6ac8c9a (merge with kale's branch 14th May 9.15pm)
  
		<div className="eventLobby-main-container row justify-content-center">
            <div onClick={()=> history.push("/sponsor_hall")} className="eventLobby-container col-lg-4 zoom">
					<Image src={sponsor_hall} height="100%" width="100%" alt="" rounded responsive/>
					<p/>
                    <h3>Sponsor Hall</h3>
            </div>

			<div onClick={()=> history.push("/competition_hall")} className="eventLobby-container col-lg-4 zoom">
					<Image src={competition_hall} height="100%" width="100%" alt="" rounded responsive/>
					<p/>
                    <h3>Competition Hall</h3>     
            </div>

        </div>


<<<<<<< HEAD
=======
      <Footer/>
>>>>>>> 2dbc05f (sponsor sign up updated)

    </div>
  );
}

export default EventLobby;