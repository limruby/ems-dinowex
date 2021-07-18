import React,{useState, useEffect} from "react";
import { useHistory,Link } from 'react-router-dom';
import {Image} from 'react-bootstrap';
import featured_sponsor from "./../../../../assets/img/featured_sponsor.jpg";
import { Tab, Tabs, Nav, Row} from "react-bootstrap";





function SponsorBooth() {
const history = useHistory();
  return (
    <div className="column">
        <div className="row">
            <h1 className="center sponsor-name">Sponsor Name</h1>
                <div className="row justify-content-center">

                    <div className="col-md-4">
                        <div className="sponsor-booth-container col-lg-12">
                            <h3 className="sponsor_title"><strong>Poster</strong></h3>
					            <Image src={featured_sponsor} height="100%" width="100%" alt="" rounded responsive/>	
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="sponsor-booth-container col-lg-12">
                            <h3 className="sponsor_title"><strong>Youtube Video</strong></h3>
                                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/lzGlJHj1mAc`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube"/>	
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="sponsor-booth-container col-lg-12">
                            <h3 className="sponsor_title"><strong>Poster</strong></h3>
					            <Image src={featured_sponsor} height="100%" width="100%" alt="" rounded responsive/>	
                        </div>
                    </div>

                    
                </div>
        </div>
        

        <div className="row">
           <p></p>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="sponsor-booth-container col-lg-12">
                            <h3 className="sponsor_title"><strong>Live Chat</strong></h3>
					            <Image src={featured_sponsor} height="100%" width="100%" alt="" rounded responsive/>	
                        </div>
                    </div>

                

                    <div className="col-md-4">
                        <div className="sponsor-booth-container col-lg-12">

                        <Tabs className="btn btn-primary sponsor-tab" defaultActiveKey="Account-Profiles" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="Account-Profiles" title="Company Profiles">
                                <h5>Company Name: Dinowex</h5>
                                <h5>Address: Kuala Lumpur</h5>
                                <h5>Company PIC: Miss Tan</h5>
                                <h5>Company Website: dinowex.com</h5>
                            </Tab>
                            <Tab eventKey="Promo-Content" title="Promotional Content">
                                <h5>Watch video to know us better!</h5>
                            </Tab>
                            <Tab eventKey="Contact-Us" title="Contact Us">
                                <h5>Tel: 012-346789</h5>
                                <h5>Email: info@dinowex.com.my</h5>
                                <h5>Location: Google Map</h5>
                            </Tab>
                        </Tabs>
                            
                        </div>
                    </div>
                </div>
        </div>
        <p></p>
    </div>
  );
}

export default SponsorBooth;