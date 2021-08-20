import React, { useState, useEffect } from "react";
import "./../../../../assets/css/agency.min.css";
import booth from "./../../../../assets/img/booth.PNG"
import { Link } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig';

function Competition_hall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("/api/competitors/readAll")
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, [data]);
  function displayBooth() {
    var section = [];
    data.map((competitor, index) => (
      section.push(
        <Link className="col-md-4" to={`/competition_booth/${competitor.account_id}`}>
          <img height="400px" width="400px" src ={booth} alt="booth"/>
          <div className="booth-name">{competitor.name}</div>
          <div className="booth-number">
            <Link className="btn btn-primary" to={`/competition_booth/${competitor.account_id}`}>
              <h3> Booth {index + 1} </h3></Link></div>
          </Link>
      ))
    );
    return section;
  }

  return (
   
      <header className="masthead">
        <div className="intro-text">
          <div className="intro-lead-in">
            <br></br>
          </div>
          <div className="row col-xl-12">
            <div className="intro-heading col-xl-12">
              Competition Hall
            </div>
          </div>
        </div>

      
      <div className="row" style={{ backgroundColor: "#fff" }}>
        {displayBooth()}
      </div>
      <br></br>
      
      </header> 
  );
}

export default Competition_hall;