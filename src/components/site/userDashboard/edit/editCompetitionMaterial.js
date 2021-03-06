/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';
import youtube from '../../../../assets/img/youtube.PNG'
import Loader from './../../../site/Loader';
function EditCompMaterial({ data, setData }) {
  const [loading, setLoading] = useState(false);
  localStorage.setItem("activeKeys", "Competition-Material");
  const [tempData, setTemp] = useState({
    tempPoster: [],
    tempVidName: "",
    tempVidPath: ""
  });
  ///////display forms//////
  //poster form
  function displayPosterForm() {
    var section = [];
    if (data.poster == null || data.poster[0] == null) {
      section.push(
        <div className="form-group">
          <input type="file" onChange={inputChange('poster', 0)} accept="image/png, image/jpeg" />
        </div>
      );
    }
    else {
      section.push(
        <div>
          <p>{data.poster[0].name}
            <button className="deleteBtn" type="button" onClick={deleteFile('poster', 0)}> <FaTrashAlt /></button>
          </p>
        </div>
      )
    }
    return section;
  }
  //achievement form max 3
  function displayAchievementForm() {
    var section = [];
    if (data.achievements != null) {
      for (var i = 0; i < data.achievements.length; i++) {
        section.push(
          <p>
            FileName: {data.achievements[i].name}
            <button className="deleteBtn" type="button" onClick={deleteFile('achievement', i)}> <FaTrashAlt /></button>
          </p>
        );
      }
    }
    if (data.achievements == null || data.achievements.length < 3) {
      section.push(
        <input type="file" onChange={inputChange('achievement')} enable accept="image/png, image/jpeg, application/pdf" />
      )
    }
    return section;
  }
  // publication form max 3
  function displayPublicationForm() {
    var section = [];
    if (data.publications != null) {
      for (var i = 0; i < data.publications.length; i++) {
        section.push(
          <p>
            FileName: {data.publications[i].name}
            <button className="deleteBtn" type="button" onClick={deleteFile('publication', i)}> <FaTrashAlt /></button>
          </p>
        );
      }
    }
    if (data.publications == null || data.publications.length < 3) {
      section.push(
        <input type="file" onChange={inputChange('publication')} enable accept="image/png, image/jpeg, application/pdf" />
      );
    }
    return section;
  }
  //grant form
  function displayGrantForm() {
    var section = [];
    if (data.grants != null) {
      for (var i = 0; i < data.grants.length; i++) {
        section.push(
          <p>
            FileName: {data.grants[i].name}
            <button className="deleteBtn" type="button" onClick={deleteFile('grant', i)}> <FaTrashAlt /></button>
          </p>
        );
      }
    }
    if (data.grants == null || data.grants[0] == null || data.grants.length < 3) {
      section.push(
        <input type="file" onChange={inputChange('grant')} enable accept="image/png, image/jpeg, application/pdf" />
      )
    }
    return section;
  }
  //video form 1 only
  function displayVideoForm() {
    var section = [];
    if (data.video == null || data.video.length === 0) {
      section.push(
        <div>
          <div className="form-group">
            <label htmlFor="videoName">Video Name </label>
            <input type="text" className="form-control" name="videoName" id="videoName"
              onChange={inputChange('vidName', 0)} value={tempData.tempVidName} />
          </div>
          <div className="form-group">
            <label htmlFor="videoPath">Video URL </label>
            <input type="text" className="form-control" name="videoPath" id="videoPath"
              onChange={inputChange('vidPath', 0)} value={tempData.tempVidPath} />
          </div>
        </div>
      );
    }
    else {
      section.push(
        <div className="form-group">
          <p>{data.video[0].name}
            <button className="deleteBtn" type="button" onClick={deleteFile('video', 0)}> <FaTrashAlt /></button>
          </p>
        </div>
      )
    }
    return section;
  }
  //////action performed//////
  var obj = [];
  const deleteFile = (element, index) => e => {
    if (element === 'poster') {
      let obj = data.poster;
      obj.splice(index, 1);
    }
    else if (element === 'achievement') {
      let obj = data.achievements;
      obj.splice(index, 1);
    }
    else if (element === 'publication') {
      let obj = data.publications;
      obj.splice(index, 1);
    }
    else if (element === 'grant') {
      let obj = data.grants;
      obj.splice(index, 1);
    }
    else if (element === 'video') {
      let obj = data.video
      obj.splice(index, 1);
    }
    setData({
      ...data,
    });
  }
  const inputChange = (element, index) => e => {
    let selectedFile = e.target.files;
    let file = null;
    let fileName = "";
    if (element === 'poster' || element === 'achievement' || element === 'publication' || element === 'grant') {
      if (selectedFile.length > 0) {
        // Select the very first file from list
        let fileToLoad = selectedFile[0];
        fileName = fileToLoad.name;
        // FileReader function for read the file.
        let fileReader = new FileReader();
        // Onload of file read the file content
        fileReader.onload = function (fileLoadedEvent) {
          file = fileLoadedEvent.target.result;
          var stringLength = file.length;
          var result = parseFloat(4 * Math.ceil(stringLength / 3))
          //Limit File Size
          if (result > 1853532) {
            alert("File size must under 1MiB!");
            return;
          } else {
            if (element === 'poster') {
              data.poster.push({ 'name': fileName, 'source': fileReader.result })
              setData({
                ...data
              })
            }
            else if (element === 'achievement') {
              data.achievements.push({ 'name': fileName, 'source': fileReader.result });
              setData({
                ...data
              })
            }
            else if (element === 'publication') {
              data.publications.push({ 'name': fileName, 'source': fileReader.result });
              setData({
                ...data
              })
            }
            else if (element === 'grant') {
              data.grants.push({ 'name': fileName, 'source': fileReader.result });
              setData({
                ...data
              })
            }
          }
        };
        // Convert data to base64
        var baseFile = fileReader.readAsDataURL(fileToLoad);
      }
    }
    if (element === 'vidName') {
      tempData.tempVidName = e.target.value;
    }
    if (element === 'vidPath') {
      tempData.tempVidPath = e.target.value;
    }
    setTemp({
      ...tempData
    });
    setData({
      ...data,
    })
    setData({
      ...data,
    })
  };
  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    // perform all neccassary validations
    // video: if name !null, path must !null
    if (tempData.tempVidName !== "") {
      if (tempData.tempVidPath === "") {
        alert("Incomplete Form");
      }
    }
    else if (tempData.tempVidPath !== "") {
      if (tempData.tempVidName === "") {
        alert("Incomplete Form");
      }
    }
    if (tempData.tempVidName !== "" && tempData.tempVidPath !== "") {
      data.video.push({ 'name': tempData.tempVidName, 'source': tempData.tempVidPath })
    }
    setData({
      ...data,
    })
    var postData = {
      _id: data._id,
      poster: data.poster,
      achievements: data.achievements,
      publications: data.publications,
      grants: data.grants,
      video: data.video,
    }
    axiosInstance.post("/api/competitors/update", postData)
      .then(function (response) {
        setLoading(false);
        window.location.href = '/user_dashboard';
      }).catch(function (error) {
        console.log(error);
      })
  };
  return (
    <>
      {loading ? <Loader /> : null}
      <form onSubmit={handleForm}>
        <div className="edit-form-container" style={{ marginTop: "5%", marginBottom: "5%" }}>
          <h1 className="mb-5">Edit Competition Material</h1>
          <h5>Poster<i className="caution"> (*Max 1 .png and .jpg ONLY) Limited to file size: 1MB </i></h5>
          {displayPosterForm()}
          <hr />
          <h5>Achievements<i className="caution"> (*Max 3) Limited to file size: 1MB </i></h5>
          <div className="form-group">
            {displayAchievementForm()}
          </div>
          <hr />
          <h5>Publications<i className="caution"> (*Max 3) Limited to file size: 1MB </i></h5>
          <div className="form-group">
            {displayPublicationForm()}
          </div>
          <hr />
          <h5>Grants<i className="caution"> (*Max 3) Limited to file size: 1MB </i></h5>
          <div className="form-group">
            {displayGrantForm()}
          </div>
          <hr />
          <h5>Video<i className="caution"> (*Max 1) Format:"https://www.youtube.com/watch?v=XXXXXXXXXXX"</i></h5>
          <br></br>
          <img src={youtube} height="auto" width="100%" alt="Correct URL from Youtube" />
          <br></br><br></br>
          {displayVideoForm()}
          <br />
          <div className="btn-group">
            <Link to="/user_dashboard">
              <button className="btn btn-danger back-btn">Back</button>
            </Link>
            <input className="btn btn-primary" type="submit" value="Update" />
          </div>
        </div>
      </form>
    </>
  )
}
export default EditCompMaterial;