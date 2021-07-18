import React,{useState, useEffect} from "react";
import { useHistory,Link } from 'react-router-dom';
import {Image} from 'react-bootstrap';
import featured_sponsor from "./../../../../assets/img/competition_hall.jpg";
import { Tab, Tabs, Nav, Row} from "react-bootstrap";





function CompetitorBooth() {
const history = useHistory();
  return (
    <div className="row">
        <div>
            <h1 className="center competitor-category">Competitor Category</h1>
            <h2 className="center project-title">Project Title</h2>    
        </div>
    <div className="row justify-content-center">
        <div className="col-md-3">
            <div className="competitor-booth-container col-lg-12">
                <h3 className="sponsor_title"><strong>Poster</strong></h3>
				    <Image src={featured_sponsor} height="100%" width="100%" alt="" rounded responsive/>	
            </div>
        </div>

        <div className="col-md-4">
            <div className="competitor-booth-container col-lg-12">
                <h3 className="sponsor_title"><strong>Video</strong></h3>
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/lzGlJHj1mAc`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube"/>	
            </div>
        <p></p>
            <div className="competitor-booth-container col-lg-12 justify-text">
                <h3 className="sponsor_title"><strong>Abstract</strong></h3>
                <a className="download-paper" href="https://www.google.com">Download Full Paper Here</a>
                <p></p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.	
            </div>
        </div>

        <div className="col-md-3">
            <div className="competitor-booth-container col-lg-12">
                <h3 className="sponsor_title"><strong>Research members</strong></h3>
                    <h5><strong>Leader:</strong> Annuar, UM</h5>
                    <h5><strong>Team Member:</strong></h5>
                    <h5>Lim Chee Hui, UM</h5>
                    <h5>Tan Kim Seng, UM</h5>	
            </div>
        <p></p>
            <div className="competitor-booth-container col-lg-12">
                <h3 className="sponsor_title"><strong>Award</strong></h3>
                    <h5>Spotlight Award</h5>
                    <h5>Design Awards</h5>
                    <h5>Innovation Awards</h5>
            </div>
        <p></p>
        <div className="competitor-booth-container col-lg-12">
                <h3 className="sponsor_title"><strong>Grant</strong></h3>
				    <Image src={featured_sponsor} height="100%" width="100%" alt="" rounded responsive/>	
            </div>
        <p></p>
            <div className="competitor-booth-container col-lg-12">
                <h3 className="sponsor_title"><strong>Live Chat</strong></h3>
				    <Image src={featured_sponsor} height="100%" width="100%" alt="" rounded responsive/>	
            </div>
        </div>
    </div>
        <p></p>         
    </div>
  );
}

export default CompetitorBooth;