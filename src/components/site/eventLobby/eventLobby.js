import React, { useState, useEffect } from "react";
import "../../../assets/css/agency.min.css";
import dinowex from "../../../assets/img/Dinowex.png";
import eventlobby from "../../../assets/img/event-lobby.png";
import { Image } from 'react-bootstrap';
import axiosInstance from '../../../utils/axiosConfig';

function EventLobby() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosInstance.get("/api/formLink/read")
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, []);
  function displayLink() {
    var section = []
    if (data.length === 0) { //all blank
      section.push(
        <div className="youtube-dropdown youtube-event">
          <span className="youtube-event-arrow"></span>YOUTUBE - EVENT
          <div className="youtube-dropdown-content" style={{color:"#D3D3D3"}}>
            <span className="youtube-dropdown-arrow"></span>DINOWEX
          </div>
        </div>
      )
    } else { //something existed but this empty
      if (data[0].youtube_form === " " || data[0].youtube_form === "") {
        section.push(
          <div className="youtube-dropdown youtube-event">
            <span className="youtube-event-arrow"></span>YOUTUBE - EVENT
            <div className="youtube-dropdown-content" style={{color:"#D3D3D3"}}>
              <span className="youtube-dropdown-arrow"></span>DINOWEX
            </div>
          </div>
        )
      } else {
        section.push(
          <div className="youtube-dropdown youtube-event">
            <span className="youtube-event-arrow"></span>YOUTUBE - EVENT
            <div className="youtube-dropdown-content">
              {/* <a href={data[0].youtube_form}><span className="youtube-dropdown-arrow"></span>DINOWEX</a> */}
              <a href='/live_event'><span className="youtube-dropdown-arrow"></span>DINOWEX</a>
            </div>
          </div>
        )
      }
    }
    return section
  }
  return (
    <div className="eventLobby">
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">
            </div>
            <div className="row">
              <div className="intro-heading col-lg-6 event-heading">
                Event Lobby
              </div>
              <div className="col-lg-6 justify-content-center">
                <Image src={dinowex} height="auto" width="100%" alt="" rounded responsive />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="img-container">
          <div className="sponsors-dropdown sponsors-hall">
            SPONSORS HALL<span className="sponsors-arrow "></span>
            <div className="sponsors-dropdown-content">

              <div className="sponsors-sub-dropdown">
                <a href="/sponsor_hall">DINOWEX</a><span className="sponsors-dropdown-arrow"></span>
              </div>
            </div>
          </div>
          <div className="speakers-dropdown speakers">
            <span className="speakers-arrow"></span>SPEAKERS
            <div className="speakers-dropdown-content">
              <a href="/speakers"><span className="speakers-dropdown-arrow"></span>DINOWEX</a>
            </div>
          </div>
          <div className="competitors-dropdown competitors-hall">
            COMPETITORS HALL<span className="competitors-arrow"></span>
            <div className="competitors-dropdown-content">
              <a href="/competition_hall">DINOWEX</a><span className="competitors-dropdown-arrow"></span>                </div>
          </div>
          {displayLink()}
          <Image src={eventlobby} height="100%" width="100%" alt="" responsive />
        </div>
      </div>
    </div>
  );
}
export default EventLobby;