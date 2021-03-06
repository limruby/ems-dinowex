/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';
import Loader from './../../../site/Loader';
function EditTeam({ data, setData }) {
  localStorage.setItem("activeKeys", "Research-Team");
  /////////////////////get login user (REPLACE THIS) ////////////////
  const [loading, setLoading] = useState(false);
  const [tempData, setTemp] = useState({
    tempName: "",
    tempAff: "",
    tempEmail: ""
  });
  const showUpload = (e) => {
    e.preventDefault();
    if (tempData.tempName !== "" && tempData.tempAff !== "" && tempData.tempEmail !== "") {
      data.members.push({ 'name': tempData.tempName, 'affiliation': tempData.tempAff, 'email': tempData.tempEmail })
      setData({
        ...data,
      })
      tempData.tempName = "";
      tempData.tempAff = "";
      tempData.tempEmail = "";
      setTemp({
        ...tempData,
      });
    }
    if (tempData.tempName !== "") {
      if (tempData.tempAff === "" || tempData.tempEmail === "") {
        alert("Incomplete Form");
      }
    }
    else if (tempData.tempAff !== "") {
      if (tempData.tempName === "" || tempData.tempEmail === "") {
        alert("Incomplete Form");
      }
    }
    else if (tempData.tempEmail !== "") {
      if (tempData.tempName === "" || tempData.tempAff === "") {
        alert("Incomplete Form");
      }
    }
  }
  var obj = [];
  const deleteFile = (element, index) => e => {
    if (element === 'members') {
      let obj = data.members;
      obj.splice(index, 1);
    }
    setData({
      ...data,
    });
  }
  const inputChange = (element, index) => e => {
    if (element === 'name') {
      tempData.tempName = e.target.value;
    }
    if (element === 'affiliation') {
      tempData.tempAff = e.target.value;
    }
    if (element === 'email') {
      tempData.tempEmail = e.target.value;
    }
    setTemp({
      ...tempData
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    var postData = {
      _id: data._id,
      members: data.members
    }
    axiosInstance.post("/api/competitors/update", postData)
      .then(function (response) {
        setLoading(false);
        window.location.href = '/user_dashboard';
      }).catch(function (error) {
        console.log(error);
      })
  };
  ///////display forms//////
  function displayMembers() {
    var section = [];
    section.push(
      <div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" id="name"
            onChange={inputChange('name', 0)} value={tempData.tempName} />
        </div>
        <div className="form-group">
          <label htmlFor="affiliation">Affiliation</label>
          <input type="text" className="form-control" name="affiliation" id="affiliation"
            onChange={inputChange('affiliation', 0)} value={tempData.tempAff} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" name="email" id="email"
            onChange={inputChange('email', 0)} value={tempData.tempEmail} />
        </div>
        <div style={{ margin: "2% 0%" }}>
          <button onClick={showUpload} className="btn btn-primary">Add</button>
        </div>
      </div>
    );
    if (data.members !== undefined) {
      for (var i = 0; i < data.members.length; i++) {
        section.push(
          <div className="member-box">
            <p><b>Team Member {i + 1}</b></p>
            <p>{data.members[i].name}</p>
            <p>{data.members[i].affiliation}</p>
            <p>{data.members[i].email}</p>
            <button className="deleteBtn" type="button" onClick={deleteFile('members', i)}> <FaTrashAlt /></button>
          </div>
        )
      }
    }
    return section;
  }
  /////////////////////////////////////////////////////////////
  return (
    <>
      {loading ? <Loader /> : null}
      <form onSubmit={handleForm}>
        <div className="edit-form-container">
          <h5>Team Members</h5>
          <br />
          {displayMembers()}
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
export default EditTeam;