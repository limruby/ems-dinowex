import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./../../../../assets/css/agency.min.css";
import './sponsor_hall.css';
import axiosInstance from '../../../../utils/axiosConfig';
import booth from "./../../../../assets/img/booth.PNG"



function Sponsor_hall() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axiosInstance.get("/api/sponsors/readAll")
        .then(function (response) {
          setData(response.data.data);
        }).catch(function (error) {
          console.log(error);
        })
    }, [data]);


    function displayGoldSponsor() {
      var section = [];
      data.map((sponsor, index) => {
        if(sponsor.category=="Gold Package"&&sponsor.company_logo && sponsor.company_logo[0]){
            const imageFormat = sponsor.company_logo[0].name.substring(sponsor.company_logo[0].name.lastIndexOf('.') + 1);
      if (imageFormat === "pdf") {
        for (var i = 0; i < sponsor.company_logo.length; i++) {
          const imageBuffer = Buffer.from(sponsor.poster[0].source.data);
          section.push(
            <div className="col-md-12">
                <Link to={`/sponsor_booth/${sponsor.account_id}`}>
                    <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
                </Link>
            </div>
          );
        }
      }
      else {
        for (var i = 0; i < sponsor.company_logo.length; i++) {
          const imageBuffer = Buffer.from(sponsor.company_logo[0].source.data);
          section.push(        
            <div className="col-md-12">
                <Link to={`/sponsor_booth/${sponsor.account_id}`}>    
                    <img width="100%" height="auto" src={imageBuffer} alt={sponsor.company_logo[0].name} />
                </Link>
            </div>
          );
        }
      }
        }
      }
      );
      return section;
    }
    function displaySilverSponsor() {
        var section = [];
        data.map((sponsor, index) => {
            if(sponsor.category=="Silver Package"&&sponsor.company_logo && sponsor.company_logo[0]){
                const imageFormat = sponsor.company_logo[0].name.substring(sponsor.company_logo[0].name.lastIndexOf('.') + 1);
          if (imageFormat === "pdf") {
            for (var i = 0; i < sponsor.company_logo.length; i++) {
              const imageBuffer = Buffer.from(sponsor.poster[0].source.data);
              section.push(
                <div className="col-md-4">
                    <Link to={`/sponsor_booth/${sponsor.account_id}`}>
                        <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
                    </Link>
                </div>
              );
            }
          }
          else {
            for (var i = 0; i < sponsor.company_logo.length; i++) {
              const imageBuffer = Buffer.from(sponsor.company_logo[0].source.data);
              section.push(        
                <div className="col-md-4">
                    <Link to={`/sponsor_booth/${sponsor.account_id}`}>    
                        <img width="100%" height="auto" src={imageBuffer} alt={sponsor.company_logo[0].name} />
                    </Link>
                </div>
              );
            }
          }
            }
          }
        );
        return section;
      }
      function displayBronzeSponsor() {
        var section = [];
        data.map((sponsor, index) => {
            if(sponsor.category=="Bronze Package"&&sponsor.company_logo && sponsor.company_logo[0]){
                const imageFormat = sponsor.company_logo[0].name.substring(sponsor.company_logo[0].name.lastIndexOf('.') + 1);
          if (imageFormat === "pdf") {
            for (var i = 0; i < sponsor.company_logo.length; i++) {
              const imageBuffer = Buffer.from(sponsor.poster[0].source.data);
              section.push(
                <div className="col-md-2">
                    <Link to={`/sponsor_booth/${sponsor.account_id}`}>
                        <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
                    </Link>
                </div>
              );
            }
          }
          else {
            for (var i = 0; i < sponsor.company_logo.length; i++) {
              const imageBuffer = Buffer.from(sponsor.company_logo[0].source.data);
              section.push(        
                <div className="col-md-2">
                    <Link to={`/sponsor_booth/${sponsor.account_id}`}>    
                        <img width="100%" height="auto" src={imageBuffer} alt={sponsor.company_logo[0].name} />
                    </Link>
                </div>
              );
            }
          }
            }
          }
        );
        return section;
      }
  
    return (
        <header className="masthead comp-background">
          <div className="intro-text">
            <div className="intro-lead-in">
              <br></br>
            </div>
            <div className="row col-xl-12">
              <div className="intro-heading col-xl-12">
                Sponsor Hall
              </div>
            </div>
          </div>
  
        
        <div className="column col-xl-12" style={{ backgroundColor: "#fff" }}>
            <p className="sponsor">Featured Sponsor</p>
            <div>
              <div>{displayGoldSponsor()}</div>
            </div>

            <br></br>

            <p className="sponsor">Silver Sponsor</p>
            <div>
              <div className="silver-sponsor">{displaySilverSponsor()}</div>
            </div>

            <br></br>
            
            <p className="sponsor">Bronze Sponsor</p>
            <div>
              <div className="bronze-sponsor">{displayBronzeSponsor()}</div>
            </div>
            <br></br>
            
            
        </div>
        
        <br></br>
        </header> 
    );
  }
  
  export default Sponsor_hall;