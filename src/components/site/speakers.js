import React, { useState, useEffect } from "react";
import '../../assets/css/agency.min.css';
import axiosInstance from '../../utils/axiosConfig.js';
import ReactRoundedImage from "react-rounded-image";

function Speakers_page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("/api/speaker/display")
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, []);

  function displayPhoto(speaker) {
    var section = [];
    if (speaker.photo == null || speaker.photo[0] == null) {
      section.push(
        <ReactRoundedImage
          roundedSize="0"
          imageWidth="400"
          imageHeight="400" />
      );
    }
    else {
      const imageBuffer = Buffer.from(speaker.photo[0].source.data);
      section.push(
        <ReactRoundedImage
          image={imageBuffer}
          roundedSize="0"
          imageWidth="400"
          imageHeight="400" />
      )
    }
    return section;
  }
  function displayKeynoteSpeaker() {
    var section = [];
    // eslint-disable-next-line array-callback-return
    data.map((speakers, index) => {
      if (speakers.category === "Keynote Speaker") {
        section.push(
        <div className="speaker col-xl-4">
          {displayPhoto(speakers)}
          <div className="speakers-name">{speakers.title} {speakers.name}</div>
          <div className="speakers-organization">{speakers.affiliation}</div>
          <hr style={{ backgroundColor: '#ffff', height: 1, borderColor: '#ffff', width: "20%", }} />
          <div className="speakers-speech-title">{speakers.speech_title}</div>
          <div className="speakers-speech-time">{speakers.speech_time}</div>
          <p></p>
        </div>
        )
      }
    });
    return section;
  }
  function displayInvitedSpeaker() {
    var section = [];
    // eslint-disable-next-line array-callback-return
    data.map((speakers, index) => {
        if (speakers.category === "Invited Speaker") {
          section.push(
            <div className="speaker col-xl-4">
              {displayPhoto(speakers)}
              <div className="speakers-name">{speakers.title} {speakers.name}</div>
              <div className="speakers-organization">{speakers.affiliation}</div>
              <hr style={{ backgroundColor: '#ffff', height: 1, borderColor: '#ffff', width: "20%", }} />
              <div className="speakers-speech-title">{speakers.speech_title}</div>
              <div className="speakers-speech-time">{speakers.speech_time}</div>
              <p></p>
            </div>
          )
        }
    });
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
            <hr style={{ backgroundColor: '#ffff', height: 1, borderColor: '#ffff', width: "80%", }} />
          </div>
        </div>
      </div>

      <div className="row justify-content-center" style={{ padding: "0 0 5%" }}>
        {displayKeynoteSpeaker()}
      </div>

      <div className="center-line">
        <h4>Invited Speakers</h4>
        <hr style={{ backgroundColor: '#ffff', height: 1, borderColor: '#ffff', width: "80%", marginBottom: "5%" }} />
      </div>

      <div className="row justify-content-center" style={{ padding: "0 0 5%" }}>
        {displayInvitedSpeaker()}
      </div>
    </header>
  );
}

export default Speakers_page;