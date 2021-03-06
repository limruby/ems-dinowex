/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "./../../../../assets/css/agency.min.css";
import axiosInstance from '../../../../utils/axiosConfig';
import logo from "../../../../assets/img/bankrakyat-logo.png";
import { Image } from 'react-bootstrap';
import Loader from './../../../site/Loader';

function Sponsor_hall() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get("/api/sponsors/readVIP")
      .then(function (response) {
        setData(response.data.data);
        setLoading(false);
      }).catch(function (error) {
        console.log(error);
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function linkToSponsorBooth() {
    window.location.href = `/sponsor_booth/${data.account_id}`;
  }
  // function displayGoldSponsor() {
  //   var section = [];
  //   data.map((sponsor, index) => {
  //     if (sponsor.category === "Gold Package" && sponsor.company_logo && sponsor.company_logo[0]) {
  //       const imageFormat = sponsor.company_logo[0].name.substring(sponsor.company_logo[0].name.lastIndexOf('.') + 1);
  //       if (imageFormat === "pdf") {
  //         for (var i = 0; i < sponsor.company_logo.length; i++) {
  //           const imageBuffer = Buffer.from(sponsor.poster[0].source.data);
  //           section.push(
  //             <div className="col-md-12">
  //               <Link to={`/sponsor_booth/${sponsor.account_id}`}>
  //                 <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
  //               </Link>
  //             </div>
  //           );
  //         }
  //       }
  //       else {
  //         for (var i = 0; i < sponsor.company_logo.length; i++) {
  //           const imageBuffer = Buffer.from(sponsor.company_logo[0].source.data);
  //           section.push(
  //             <div className="col-md-12">
  //               <Link to={`/sponsor_booth/${sponsor.account_id}`}>
  //                 <img width="60%" height="auto" src={imageBuffer} alt={sponsor.company_logo[0].name} />
  //               </Link>
  //             </div>
  //           );
  //         }
  //       }
  //     }
  //   }
  //   );
  //   return section;
  // }
  // function displaySilverSponsor() {
  //   var section = [];
  //   data.map((sponsor, index) => {
  //     if (sponsor.category === "Silver Package" && sponsor.company_logo && sponsor.company_logo[0]) {
  //       const imageFormat = sponsor.company_logo[0].name.substring(sponsor.company_logo[0].name.lastIndexOf('.') + 1);
  //       if (imageFormat === "pdf") {
  //         for (var i = 0; i < sponsor.company_logo.length; i++) {
  //           const imageBuffer = Buffer.from(sponsor.poster[0].source.data);
  //           section.push(
  //             <div className="col-md-4">
  //               <Link to={`/sponsor_booth/${sponsor.account_id}`}>
  //                 <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
  //               </Link>
  //             </div>
  //           );
  //         }
  //       }
  //       else {
  //         for (var i = 0; i < sponsor.company_logo.length; i++) {
  //           const imageBuffer = Buffer.from(sponsor.company_logo[0].source.data);
  //           section.push(
  //             <div className="col-md-4">
  //               <Link to={`/sponsor_booth/${sponsor.account_id}`}>
  //                 <img width="100%" height="auto" src={imageBuffer} alt={sponsor.company_logo[0].name} />
  //               </Link>
  //             </div>
  //           );
  //         }
  //       }
  //     }
  //   }
  //   );
  //   return section;
  // }
  // function displayBronzeSponsor() {
  //   var section = [];
  //   data.map((sponsor, index) => {
  //     if (sponsor.category === "Bronze Package" && sponsor.company_logo && sponsor.company_logo[0]) {
  //       const imageFormat = sponsor.company_logo[0].name.substring(sponsor.company_logo[0].name.lastIndexOf('.') + 1);
  //       if (imageFormat === "pdf") {
  //         for (var i = 0; i < sponsor.company_logo.length; i++) {
  //           const imageBuffer = Buffer.from(sponsor.poster[0].source.data);
  //           section.push(
  //             <div className="col-md-2">
  //               <Link to={`/sponsor_booth/${sponsor.account_id}`}>
  //                 <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
  //               </Link>
  //             </div>
  //           );
  //         }
  //       }
  //       else {
  //         for (var i = 0; i < sponsor.company_logo.length; i++) {
  //           const imageBuffer = Buffer.from(sponsor.company_logo[0].source.data);
  //           section.push(
  //             <div className="col-md-2">
  //               <Link to={`/sponsor_booth/${sponsor.account_id}`}>
  //                 <img width="100%" height="auto" src={imageBuffer} alt={sponsor.company_logo[0].name} />
  //               </Link>
  //             </div>
  //           );
  //         }
  //       }
  //     }
  //   }
  //   );
  //   return section;
  // }

  return (
    <header className="sponsor-masthead">
      {loading ? <Loader /> : null}
      <div className="intro-text">
        <div className="intro-lead-in">
          <br></br>
        </div>
        <div className="row">
          <div className="intro-heading col-xl-12">
            MAIN SPONSOR
            <br></br>
            <button onClick={() => { linkToSponsorBooth() }} className="btn btn-rakyat">View Booth</button>
          </div>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: "#fff" }}>
        <div className="sponsor-logo">
          <Image src={logo} height="auto" width="50%" alt="" responsive />
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6" style={{ backgroundColor: "#7e7ebc" }}>
          <div className="sponsor-details">
            <p>The Biggest Islamic Cooperative Bank In Malaysia</p>
            <p>Consumer Banking, Commercial Financing, Savings And Investments And Financial Planning Products</p>
            <p>147 Branches, More Than 990 Automated Teller Machines (ATMs) And Cash Deposit Machines (CDM), And 183 Ar-Rahnu X'Change Nationwide</p>
          </div>
        </div>

        <div className="col-xl-6" style={{ backgroundColor: "#43ba7a" }}>
          <div className="sponsor-details">
            <p>MISSION</p>
            <h4>Malaysia's No. 1 Progressive Islamic Cooperative Bank.</h4>
          </div>

          <div className="sponsor-details">
            <p>VISION</p>
            <h4>Enhancing Economic Well-Being Of Our Members, Customers And Nation.</h4>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Sponsor_hall;