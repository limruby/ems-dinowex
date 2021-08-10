import React,{useState, useEffect} from "react";
import { useHistory,Link } from 'react-router-dom';
import "../../../assets/css/agency.min.css";
import Footer from './../footer';
import './eventLobby.css';
import dinowex from "../../../assets/img/Dinowex.png";
import iiidentex from  "../../../assets/img/IIIDentEx2021 Logo-white-01.webp";
import sponsor_hall from "../../../assets/img/sponsor_hall.jpg";
import competition_hall from "../../../assets/img/competition_hall.jpg";
import {Image} from 'react-bootstrap';




function EventLobby() {
const history = useHistory();
  return (
    <div className="eventLobby">
  
  <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">
            </div>

            <div className="row">

            <div className="intro-heading col-lg-6">
              Event Lobby
            </div>

            <div className="col-lg-3 justify-content-center">
              <Image src={dinowex} height="70%" width="100%" alt="" rounded responsive/>
            </div>

            <div className="col-lg-3 justify-content-center">
              <Image src={iiidentex} height="70%" width="100%" alt="" rounded responsive/>
            </div>

            </div>

          </div>

        <div className="row">
          <div className="row col-lg-4 justify-content-center">
          <h3>COMPETITORS HALL</h3>  
            <p/>
            <div onClick={()=> history.push("/competition_hall")} className="eventLobby-container col-lg-6 zoom">
					      <Image src={sponsor_hall} height="100%" width="100%" alt="" rounded responsive/>
					      <p/>
                <h5>DINOWEX 2021</h5>
            </div>

			      <div onClick={()=> history.push("/competition_hall")} className="eventLobby-container col-lg-6 zoom">
					      <Image src={competition_hall} height="100%" width="100%" alt="" rounded responsive/>
					      <p/>
                <h5>IIIDENTEX 2021</h5>     
            </div>
          </div>

          <div className="row col-lg-4 justify-content-center">
          <h3>SPONSOR HALL</h3>  
            <p/>
			      <div onClick={()=> history.push("/sponsor_hall")} className="eventLobby-container col-lg-6 zoom">
					      <Image src={competition_hall} height="100%" width="100%" alt="" rounded responsive/>
					      <p/>
                    
            </div>
          </div>

          <div className="row col-lg-4 justify-content-center">
          <div className="eventLobby-container col-lg-12 zoom">
                <a href="https://www.google.com">
                <Image src={sponsor_hall} height="100%" width="100%" alt="" rounded responsive/>
                </a>
                <p/>
            <h5>YOUTUBE VIDEO TO LIVE EVENT ON 5 & 6 OCT 2021</h5>
            </div>
            <p/>
            
          </div>


        </div>

          

        </div>
  </header>

		



    </div>
  );
}

export default EventLobby;