import React, { useState, useEffect } from "react";
import "../../../assets/css/agency.min.css";
import axiosInstance from '../../../utils/axiosConfig';

function LiveEvent() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosInstance.get("/api/formLink/read")
            .then(function (response) {
                setData(response.data.data);
                console.log(response.data.data);
            }).catch(function (error) {
                console.log(error);
            })
    }, []);
    function displayLink() {
        var section = []
        if (data.length === 0) { //all blank
            section.push(
                <div className="empty-container">
                    <h1>Coming Soon</h1>
                </div>
            )
        } else { //something existed but this empty
            if (data[0].youtube_form === " " || data[0].youtube_form === "") {
                section.push(
                    <div className="empty-container">
                        <h1>Coming Soon</h1>
                    </div>
                )
            } else {
                section.push(
                    <div>
                        <div className="welcome-box">
                            <h1 style={{ textAlign: "center" }}>Live Event</h1>
                        </div>
                        <iframe
                            width="854"
                            height="480"
                            src={data[0].youtube_form}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"></iframe>
                    </div>
                )
            }
        }
        return section
    }
    return (
        <section className="section-container" style={{textAlign:'center'}}>
            {displayLink()}
        </section>
    )
}
export default LiveEvent;