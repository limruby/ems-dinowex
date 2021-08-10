import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./../../../../assets/css/agency.min.css";
import axiosInstance from '../../../../utils/axiosConfig';

function Competition_hall() {
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
            <b>Content</b>: {data.abstract[0].content}
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
            <embed src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="40%" height="500px" />
            </div>
          );
        }
      }
      else {
        for (var i = 0; i < data.poster.length; i++) {
          const imageBuffer = Buffer.from(data.poster[0].source.data);
          section.push(
            <div>
            <img src={imageBuffer} alt={data.poster[0].name} />
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
          <div>
          <iframe width="420" height="315" src={`https://www.youtube.com/embed/${url}`} title="cincai"></iframe>
          </div>
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
          placeholder='comment'
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
        {forum[i].comment}
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
                {displayContent()}
              </div>
              <div className="display-video col-xl-12">
                {displayVideo()}
              </div>
              <div className="display-members col-xl-12">
                <div>Research members</div>
              </div>
              <div className="display-awards col-xl-12">
                <div>Awards</div>
              </div>
              <div className="display-grants col-xl-12">
                <div>Grants</div>
              </div>
            </div>

            <div className="column display col-xl-6">
              <div className="display-poster col-xl-12">
                {displayPoster()}
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

export default Competition_hall;