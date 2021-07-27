import React, { useState, useEffect } from "react";
import "./../../../../assets/css/agency.min.css";
import axiosInstance from '../../../../utils/axiosConfig';

function Competition_hall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance.get("/api/competitors/readAll")
      .then(function (response) {
        setData(response.data.data);
        console.log(data)
      }).catch(function (error) {
        console.log(error);
      })
  }, [data]);
  // function displayBooth(){
  //    var section = [];
  //    var poster = "data:application/pdf;base64;"
  //       data.map((competitor, index) =>  (
  //         poster =
  //         section.push(
  //       <div>
  //         <label>Booth {index+1}</label>
  //       <p> {competitor.account_id} </p>  
  //       <iframe src= {poster} {competitor.poster.source} title="poster"></iframe> 
  //       </div>
  //       ))
  //   );
  //   return section;
  //   }

  return (
    <div className="Competition_hall">
    {/* {displayBooth()} */}

    </div>
  );
}

export default Competition_hall;