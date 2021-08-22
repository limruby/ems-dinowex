import React,{useState, useEffect} from "react";
import { useHistory,Link } from 'react-router-dom';
import {Image} from 'react-bootstrap';
import featured_sponsor from "./../../../../assets/img/featured_sponsor.jpg";
import { Tab, Tabs, Nav, Row} from "react-bootstrap";
import axiosInstance from '../../../../utils/axiosConfig';
import { useLocation } from "react-router-dom";
import { BsPeopleCircle } from "react-icons/bs";

function Sponsor_booth() {
    const [data, setData] = useState([]);
    const [forum, setForum] = useState([])
    const [comment, setComment] = useState("");
    const location = useLocation();
    const thePath = location.pathname;
    const user_id = thePath.substring(thePath.lastIndexOf('/') + 1);
    const string = '"' + user_id + '"'
    useEffect(() => {
      axiosInstance.get("/api/sponsors/read", { params: { account_id: string } })
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
        comment: comment,
        comment_date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
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
    
    function displayLogo() {
        var section = [];
        if (data.company_logo && data.company_logo[0]) {
          const imageFormat = data.company_logo[0].name.substring(data.company_logo[0].name.lastIndexOf('.') + 1);
          if (imageFormat === "pdf") {
            for (var i = 0; i < data.company_logo.length; i++) {
              const imageBuffer = Buffer.from(data.company_logo[0].source.data);
              section.push(
                <div>
                <embed src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`} width="100%" height="auto" />
                </div>
              );
            }
          }
          else {
            for (var i = 0; i < data.company_logo.length; i++) {
              const imageBuffer = Buffer.from(data.company_logo[0].source.data);
              section.push(
                <div>
                <img src={imageBuffer} alt={data.company_logo[0].name} width="100%" height="auto"/>
                </div>
              );
            }
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
              <embed className="poster_image"src={`${imageBuffer}#toolbar=0&navpanes=0&scrollbar=0`}/>
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
      if(data.video){
      if (data.video.length!=0) {
        const url = data.video[0].source.substring(data.video[0].source.lastIndexOf('/') + 9);
        console.log(url)
        
          section.push(  
            <iframe className="video_iframe" height="400" src={`https://www.youtube.com/embed/${url}`} title={data.video[0].name}></iframe>
          );
        
      }
    }
      return section;
    }
    function displayComp_video() {
      var section = []
      if (data.video) {
        for (var i = 0; i < data.video.length; i++) {
          const url = data.video[i].source.substring(data.video[i].source.lastIndexOf('/') + 9);
          section.push(  
            <div className="video-name">
            <a href={`https://www.youtube.com/embed/${url}`} >{data.video[i].name}</a>
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
          <div className="row">
        <b className="forum-name col-xl-8"><BsPeopleCircle className="forum-avatar"></BsPeopleCircle> {forum[i].name}</b>
        <p className="col-xl-4">{forum[i].comment_date}</p>
        </div>
        <p className="forum-comment">{forum[i].comment}</p>
        
      </div>
         );
     
    }
      return section;
    }
    function displayComp_name() {
      var section = []
      if (data.company_name) {
        section.push(
          <div>
            Company Name: {data.company_name}
          </div>
        );
      }
      return section;
    }
    function displayComp_address() {
      var section = []
      if (data.address_1&&data.address_2&&data.postcode&&data.city&&data.state&&data.country) {
        section.push(
          <div>
            Company Address: {data.address_1+" "+data.address_2+" "+data.postcode+" "+data.city+", "+data.state+", "+data.country}
          </div>
        );
      }else if(data.address_1&&data.postcode&&data.city&&data.state&&data.country){
        section.push(
          <div>
            Company Address: {data.address_1+" "+data.postcode+" "+data.city+", "+data.state+", "+data.country}
          </div>
        );
      }
      return section;
    }
    function displayComp_PIC() {
      var section = []
      if (data.company_pic_name) {
        section.push(
          <div>
            Company PIC: {data.company_pic_name}
          </div>
        );
      }
      return section;
    }
    function displayComp_website() {
      var section = []
      if (data.company_website) {
        section.push(
          <div>
            Company Website: {data.company_website}
          </div>
        );
      }
      return section;
    }
    function displayContent() {
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
    function displayContact() {
      var section = []
      if (data.company_contact) {
        section.push(
          <div>
            Tel: {data.company_contact}
          </div>
        );
      }
      return section;
    }
    return (
  <header className="masthead comp-background">
          <div className="container">
            <div className="intro-text">
              <div className="row col-xl-12">
              <div className="intro-heading col-xl-12">
              {displayLogo()}
              </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="display-poster col-xl-12">
                {displayPoster()}
            </div>

            <div className="display-video col-xl-12">
                {displayVideo()}
            </div>
          </div>

          <div className="row">
              <div className="display column col-xl-6">
                <div className="display-profile col-xl-12">
                <div className="title">
                  <b>COMPANY PROFILE</b>
                </div>
                <div className="profile">
                  {displayComp_name()}
                  {displayComp_address()}
                  {displayComp_PIC()}
                  {displayComp_website()}
                </div>
                </div>
                
                <div className="display-promotional-content col-xl-12">
                <div className="title">
                  <b>PROMOTIONAL CONTENT</b>
                </div>
                <div className="promotional-content">
                    {displayComp_video()}
                </div>
                </div>
                <div className="display-awards col-xl-12">
                <div className="title">
                  <b>CONTACT US</b>
                </div>
                <div className="contact-us">
                  {displayContact()}
                  
                </div>
                </div>
              </div>
  
              <div className="column display col-xl-6">
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

export default Sponsor_booth;