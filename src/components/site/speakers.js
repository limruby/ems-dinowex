import React, { useState, useEffect } from "react";
import '../../assets/css/agency.min.css';
import booth from "./../../assets/img/booth.PNG"
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/axiosConfig.js';
import ReactRoundedImage from "react-rounded-image";

function Speakers_page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("/api/speaker/readAll")
      .then(function (response) {
        setData(response.data.data);
        console.log(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, []);
  function displaySpeaker() {
    var section = [];
    data.map((speakers, index) => {
      if(speakers){
          section.push(
            <div className="speaker col-xl-4">
              <ReactRoundedImage image={booth} roundedSize="0" imageWidth="400" imageHeight="400" />
              <div className="speakers-name">{speakers.title} {speakers.name}</div>
              <div className="speakers-organization">{speakers.affiliation}</div>
              <hr style={{backgroundColor: '#ffff',height: 1, borderColor : '#ffff', width:"20%",}}/>
              <div className="speakers-speech-title">Enhancing Quality of Life through Technology</div>
              <div className="speakers-speech-time">2:15PM</div>
              <p></p>
            </div>
          )
      }
      else{
          section.push(
              <div>

              </div>
          )
      }
    }
    );
    return section;
  }

  return (

    <header className="masthead">
      <div className="intro-text">
        <div className="intro-lead-in">
          <br></br>
        </div>
        <div className="row">
          <div className="intro-heading col-xl-12">
            Speakers
          </div>
          <div className="center-line">
          <h4>Keynote Speakers</h4>
          <hr style={{backgroundColor: '#ffff',height: 1, borderColor : '#ffff', width:"80%",}}/>
          </div>
        </div>
      </div>

      <div className="row justify-content-center" style={{padding:"0 5%"}}>
        {displaySpeaker()}
      </div>
    </header>
  );
}

export default Speakers_page;