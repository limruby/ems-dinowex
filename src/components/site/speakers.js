import React, { useState, useEffect } from "react";
import '../../assets/css/agency.min.css';
import ibrahim from "./../../assets/img/Dato-Ibrahim.jpg"
import peter from "./../../assets/img/Peter.png"
import osman from "./../../assets/img/osman.JPG"
import hazwan from "./../../assets/img/hazwan.jpg"
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
              <ReactRoundedImage roundedSize="0" imageWidth="400" imageHeight="400" />
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
    <header className="masthead speaker-header">
      <div className="intro-text">
      <br></br>
      <br></br>
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

      <div className="row justify-content-center" style={{padding:"0 0 5%"}}>

      <div className="speaker col-xl-4">
          <ReactRoundedImage image={ibrahim} roundedSize="0" imageWidth="350" imageHeight="350" />
            <div className="speakers-name">Dato' Dr Mohamed Ibrahim A. Wahid</div>
              <div className="speakers-organization">Medical Director Beacon Hospital, PJ</div>
                <hr style={{backgroundColor: '#ffff',height: 1, borderColor : '#ffff', width:"20%",}}/>
                <div className="speakers-speech-title">Enhancing Quality of Life through Technology</div>
                <div className="speakers-speech-time">2:15PM</div>
              <p></p>
      </div>

      <div className="speaker col-xl-4">
          <ReactRoundedImage image={peter} roundedSize="0" imageWidth="350" imageHeight="350" />
            <div className="speakers-name">Dr. Peter Blanchfield</div>
              <div className="speakers-organization">Technical Director IBiT Software Ltd, UK</div>
                <hr style={{backgroundColor: '#ffff',height: 1, borderColor : '#ffff', width:"20%",}}/>
                <div className="speakers-speech-title">Enhancing Quality of Life through Technology</div>
                <div className="speakers-speech-time">2:15PM</div>
              <p></p>
      </div>


      </div>


      <div className="center-line">
          <h4>Invited Speakers</h4>
          <hr style={{backgroundColor: '#ffff',height: 1, borderColor : '#ffff', width:"80%",marginBottom:"5%"}}/>
      </div>

      <div className="row justify-content-center" style={{padding:"0 0 5%"}}>

      <div className="speaker col-xl-4">
          <ReactRoundedImage image={osman} roundedSize="0" imageWidth="350" imageHeight="350" />
            <div className="speakers-name">Mr. Azran Osman-Rani</div>
              <div className="speakers-organization">CEO & Co-Founder Naluri</div>
                <hr style={{backgroundColor: '#ffff',height: 1, borderColor : '#ffff', width:"20%",}}/>
                <div className="speakers-speech-title">Enhancing Quality of Life through Technology</div>
                <div className="speakers-speech-time">2:15PM</div>
              <p></p>
      </div>

      <div className="speaker col-xl-4">
          <ReactRoundedImage image={hazwan} roundedSize="0" imageWidth="350" imageHeight="350" />
            <div className="speakers-name">Mr. Hazwan Najib</div>
              <div className="speakers-organization">Director & Co-Founder DoctorOnCall.com.my</div>
                <hr style={{backgroundColor: '#ffff',height: 1, borderColor : '#ffff', width:"20%",}}/>
                <div className="speakers-speech-title">Enhancing Quality of Life through Technology</div>
                <div className="speakers-speech-time">2:15PM</div>
              <p></p>
      </div>


      </div>
    </header>
  );
}

export default Speakers_page;