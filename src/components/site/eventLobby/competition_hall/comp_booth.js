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
          <h1>{data.abstract[0].title}</h1>
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
          <p>
            <b>Content</b>: {data.abstract[0].content}
          </p>
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
            <embed src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="40%" height="500px" />
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
      const url = data.video[0].source.substring(data.video[0].source.lastIndexOf('/') + 1);
      console.log(url)
      for (var i = 0; i < data.video.length; i++) {
        section.push(
          <iframe width="420" height="315" src={`https://www.youtube.com/embed/${url}`} title="cincai"></iframe>
        );
      }
    }
    return section;
  }
  function displayForumForm() {
    var section = []
    section.push(
      <form onSubmit={handleForm}>
        <textarea
          className="form-control"
          type='text'
          name='comment'
          id="comment"
          placeholder='comment'
          required
          onChange={inputChange}
          value={comment} />
        <div className="col-6 text-right">
          <input className="btn btn-primary" type="submit" value="Post" />
        </div>
      </form>
    );
    return section;
  }
  function displayForum() {
    var section = []
    for(var i = 0; i < forum.length; i++){
    section.push(
      <div>
        <p>{forum[i].comment}</p>
      </div>
       );
   
  }
    return section;
  }
  return (
    <div className="Competition_hall">
      {displayTitle()}
      {displayContent()}
      {displayPoster()}
      {displayVideo()}
      {displayForumForm()}
      {displayForum()}


    </div>
  );
}

export default Competition_hall;