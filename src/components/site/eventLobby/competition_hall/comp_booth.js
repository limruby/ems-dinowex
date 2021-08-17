import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./../../../../assets/css/agency.min.css";
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
            <b>ContentContentContentContentContentContentContentContentContentCo ntentCConten tContent ontent</b>: {data.abstract[0].content}
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
            <div>
            <embed className="poster_image" src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} />
            </div>
          );
        }
      }
      else {
        for (var i = 0; i < data.poster.length; i++) {
          const imageBuffer = Buffer.from(data.poster[0].source.data);
          section.push(
            <div>
            <img className="poster_image" src={imageBuffer} alt={data.poster[0].name} />
            </div>
          );
        }
      }
    }
    return section;
  }
  function displayVideo() {
    var section = []
    if (data.video != null) {
      const url = data.video[0].source.substring(data.video[0].source.lastIndexOf('/') + 1);
      console.log(url)
      for (var i = 0; i < data.video.length; i++) {
        section.push(
          <iframe className="video_iframe"  height="400" src={`https://www.youtube.com/embed/${url}`} title="cincai"></iframe>
        );
      }
    }
    return section;
  }
  function displayForumForm() {
    var section = []
    section.push(
      <form onSubmit={handleForm}>
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
    for(var i = 0; i < forum.length; i++){
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
        <div className="container">
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

        <div className="row">
            <div className="display column col-xl-6">
              <div className="display-content col-xl-12">
                <div className="title">
                  <b>ABSTRACT</b>
                </div>
                <div className="abstract-content">
                {displayContent()}
                {displayContent()}
                {displayContent()}
                {displayContent()}
                {displayContent()}
                {displayContent()}
                {displayContent()}
                {displayContent()}
                {displayContent()}
                {displayContent()}
                {displayContent()}
                {displayContent()}
                {displayContent()}
                {displayContent()}
                </div>
              </div>
              <div className="display-video col-xl-12">
                {displayVideo()}
              </div>
              <div className="display-members col-xl-12">
                <div className="title">
                  <b>RESEARCH MEMBERS</b>
                </div>
                <div className="members-name">
                <div>JOHN SMITH</div>
                <div>TAYLOR SWIFT</div>
                <div>SABRINA CLAUDIO</div>
                <div>RAVEENA</div>
                </div>
              </div>
              <div className="display-awards col-xl-12">
              <div className="title">
                  <b>AWARDS</b>
                </div>
                <div className="awards-name">
                <div>The Best Research Paper</div>
                  <div className="awards-year">2014 - UM</div>
                <div>The Best Research Paper</div>
                  <div className="awards-year">2014 - UM</div>
                </div>
              </div>
              <div className="display-grants col-xl-12">
              <div className="title">
                  <b>GRANTS</b>
                </div>
                <div className="grants-name">
                <div>RM 10,000</div>
                </div>
              </div>
            </div>

            <div className="column display col-xl-6">
              <div className="display-poster col-xl-12">
                {displayPoster()}
              </div>
              <div className="forum-title">
                  <b>FORUM CHAT</b>
                </div>
              <div className="display-forum col-xl-12">
                {displayForum()}
              </div>
              <div className="display-forum-form col-xl-12">
                {displayForumForm()}
              </div>
            </div>
        </div>
        <br></br>
  </header>
 
  );
}

export default Competition_booth;