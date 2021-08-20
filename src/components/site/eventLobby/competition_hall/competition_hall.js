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
        <div className="col-md-4" style={{backgroundColor:"blue"}}>
          <img src ={booth} alt="booth"/>
          <div className="centered">
            <Link to={`/competition_booth/${competitor.account_id}`}>
              <h3> Booth {index + 1} </h3></Link></div>
          </div>
      ))
    );
    return section;
  }

  return (
    <section className="section-container">
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
      </header>
      <div className="container">
      <div className="row" style={{ backgroundColor: "#fff" }}>
        {displayBooth()}
      </div>
      {/* To be removed */}
      <h2>Example row and column</h2>
      <div className="row" style={{ backgroundColor: "#fff" }}>     
      <div className="col-md-4" style={{backgroundColor:"blue"}}>
      <img src ={booth} alt="booth"/>
      </div>
      <div className="col-md-4" style={{backgroundColor:"blue"}}>
      <img src ={booth} alt="booth"/>
      </div>
      <div className="col-md-4" style={{backgroundColor:"blue"}}>
      <img src ={booth} alt="booth"/>
      </div>
      </div>
       {/* To be removed */}
      </div>

    </section>
  );
}

export default Competition_hall;