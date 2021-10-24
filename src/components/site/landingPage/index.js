/* eslint-disable no-unused-vars */
import React from "react";
import "../../../assets/css/agency.min.css";
import compBooth from "../../../assets/img/competitor_booth.jpeg";
import sponsorBooth from "../../../assets/img/sponsor_booth.jpeg"
function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">
            </div>
            <div className="home-intro-heading">
              DInoWex2021
            </div>
            <div className="intro-subheading ">
              International Digital Innovation in Wellness 2021
            </div>
          </div>
        </div>
      </header>
      <section className="page-section" id="competition"></section>
      {/* <section className="page-section" id="competition">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Participant Booth</h2>
              <h3 className="section-subheading text-muted">
              </h3>
            </div>
          </div>
          <div className="row text-center" style={{ display: "block" }}>
            <img src={compBooth} alt="sample-booth" width="70%" height="auto" />
          </div>
        </div>
      </section>
      <section className="bg-light page-section" id="sponsorship">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Sponsor Booth</h2>
              <h3 className="section-subheading text-muted">
              </h3>
            </div>
          </div>
          <div className="row text-center" style={{ display: "block" }}>
            <img src={sponsorBooth} alt="sample-booth" width="70%" height="auto" />
          </div>
        </div>
      </section> */}
      {/* <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">
                Contact : <a href="mailto:dinowex-list@um.edu.my">dinowex-list@um.edu.my</a>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="subject"
                        type="tel"
                        placeholder="Your Subject *"
                        required="required"
                        data-validation-required-message="Please enter your subject."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Your Message *"
                        required="required"
                        data-validation-required-message="Please enter a message."
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
export default LandingPage;
