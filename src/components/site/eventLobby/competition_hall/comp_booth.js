import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./../../../../assets/css/agency.min.css";
import "./../../../../assets/css/bootstrap.min.css";
import axiosInstance from '../../../../utils/axiosConfig';
import { BsPeopleCircle } from "react-icons/bs";

function Competition_booth() {
  const [data, setData] = useState([]);
  const [forum, setForum] = useState([])
  const [comment, setComment] = useState("");
  const location = useLocation();
  const thePath = location.pathname;
  const user_id = thePath.substring(thePath.lastIndexOf('/') + 1);
  const string = '"' + user_id + '"'
  useEffect(() => {
    axiosInstance.get("/api/competitors/read", { params: { account_id: string } })
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
    axiosInstance.get("/api/forum/read", { params: { booth_id: string } })
      .then(function (response) {
        console.log(response.data.data)
        setForum(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, [string])

  const inputChange = e => {
    setComment(e.target.value)
  };

  const handleForm = (e) => {
    var postData = {
      booth_id: string,
      account_id: localStorage.getItem("user_id"),
      email: localStorage.getItem("email"),
      name: localStorage.getItem("name"),
      comment: comment
    }
    if (comment !== null) {
      axiosInstance.post("/api/forum/create", postData)
        .then(function (response) {
          //  window.location.href = '/competition_booth/:id';
        }).catch(function (error) {
          console.log(error);
        })
    }
  }
  function displayTitle() {
    if (data.abstract !== undefined) {
      var section = [];
      for (var i = 0; i < data.abstract.length; i++) {
        section.push(
          <div>{data.abstract[0].title}</div>

        );
      }
      return section;
    }
  }
  function displayContent() {
    var section = [];

    if (data.abstract != null) {
      for (var i = 0; i < data.abstract.length; i++) {
        section.push(
          <div>
            {data.abstract[0].content}
          </div>
        );
      }
    }
    return section;
  }
  function displayPoster() {
    var section = [];
    if (data.poster && data.poster[0]) {
      const imageFormat = data.poster[0].name.substring(data.poster[0].name.lastIndexOf('.') + 1);
      if (imageFormat === "pdf") {
        for (var i = 0; i < data.poster.length; i++) {
          const imageBuffer = Buffer.from(data.poster[0].source.data);
          section.push(
              <embed className="display-poster" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
          );
        }
      }
      else {
        for (var i = 0; i < data.poster.length; i++) {
          const imageBuffer = Buffer.from(data.poster[0].source.data);
          section.push(            
              <img src={imageBuffer} alt={data.poster[0].name} />
          );
        }
      }
    }
    return section;
  }
  function displayVideo() {
    var section = []
    if (data.video != null) {
      const url = data.video[0].source.substring(data.video[0].source.lastIndexOf('/') + 9);
      // console.log(url)
      for (var i = 0; i < data.video.length; i++) {
        section.push(
          <iframe className="video_iframe" height="400" src={`https://www.youtube.com/embed/${url}`} title={data.video[0].name}></iframe>
        );
      }
    }
    return section;
  }
  function displayMembers() {
    var section = []
    if (data.members != null) {
      for (var i = 0; i < data.members.length; i++) {
        section.push(
          <div className="members-name">
            <p><b>{data.members[i].name}</b></p>
            <p>{data.members[i].affiliation}</p>
            <p>{data.members[i].email}</p>
          </div>
        );
      }
    }
    return section;
  }
  function displayAwards() {
    var section =[];
    if(data.achievements){
    
        for (var i=0; i<data.achievements.length; i++){
        const imageBuffer = Buffer.from(data.achievements[i].source.data); 
            section.push(
              <div className="awards-name">
              <a download={data.achievements[i].name} href={imageBuffer} title={data.achievements[i].name}>{data.achievements[i].name}</a>
              </div>
            );
        }
        }else{
        console.log("no data");       
        }
        return section; 
      }
  function displayGrants() {
    var section = [];
    if(data.grants){   
      for (var i=0; i<data.grants.length; i++){
      const imageBuffer = Buffer.from(data.grants[i].source.data); 
          section.push(
            <div className="awards-name">
            <a download={data.grants[i].name} href={imageBuffer} title={data.grants[i].name}>{data.grants[i].name}</a>
            </div>
          );
      }
      }else{
      console.log("no data");       
      }
      return section; 
    }
  function displayForumForm() {
    var section = []
    section.push(
      <form onSubmit={handleForm} style={{padding: "2%"}}>
        <br></br>
        <textarea
          className="form-control"
          type='text'
          name='comment'
          id="comment"
          placeholder='Type your message...'
          required
          onChange={inputChange}
          value={comment} />
        <br></br>
        <div>
          <input className="btn btn-primary" type="submit" value="Post" />
        </div>
        <br></br>
      </form>
    );
    return section;
  }
  function displayForum() {
    var section = []
    for (var i = 0; i < forum.length; i++) {
      section.push(
        <div>
          <b className="forum-name"><BsPeopleCircle className="forum-avatar"></BsPeopleCircle> {forum[i].name}</b>
          <p className="forum-comment">{forum[i].comment}</p>
        </div>
      );

    }
    return section;
  }
  return (
    <header className="masthead comp-background">
      <div className="section-container">
        <div className="intro-text">
          <div className="intro-lead-in">
            <br></br>
          </div>
          <div className="row col-xl-12">
            <div className="intro-heading col-xl-12">
              {displayTitle()}
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{padding: "0px 10px"}}>
        <div className="col-xl-6" style={{padding: "0%" , backgroundColor:"#7e7ebc"}}>
          <div className="display-content">
            <div className="title">
              <b>ABSTRACT</b>
            </div>
            <div className="abstract-content">
              {displayContent()}
             
            </div>
          </div>
          <div className="display-video">
            {displayVideo()}
          </div>
          <div className="display-members">
            <div className="title">
              <b>RESEARCH MEMBERS</b>
            </div>
            <div className="members-name">
            <p><b>{data.name}</b></p>
            <p>{data.affiliation}</p>
            <p>{localStorage.getItem("email")}</p>
            </div>
              {displayMembers()}
            
          </div>
          <div className="display-awards">
            <div className="title">
              <b>AWARDS</b>
            </div>           
              {displayAwards()}
          </div>
          <div className="display-grants">
            <div className="title">
              <b>GRANTS</b>
            </div>
            {displayGrants()}
          </div>
        </div>

        <div className="col-xl-6" style={{padding: "0%", backgroundColor:"#43ba7a"}}>
          <div className="display-poster">
            {displayPoster()}
          </div>
          <div className="forum-title">
            <b>FORUM CHAT</b>
          </div>
          <div className="display-forum">
            {displayForum()}
          </div>
          <div className="display-forum-form">
            {displayForumForm()}
          </div>
          </div>
        </div>
      <br></br>
    </header>
  );
}
export default Competition_booth;