import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';
import Dialog from '../../Dialog.js';
import Loader from './../../../site/Loader';

function InsertLink() {
    localStorage.setItem("activeKeys", "Link")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        evaluation_form: '',
        youtube_form: '',
        poster_form: ''
    })
    const [link, setLink] = useState([])
    useEffect(() => {
        setLoading(true);
        axiosInstance.get("/api/formLink/read")
            .then(function (response) {
                setLink(response.data.data);
                setLoading(false);
            }).catch(function (error) {
                console.log(error);
            })
    }, [])
    const inputChange = input => e => {
        setData({
            ...data,
            [input]: e.target.value
        });
    };
    //One link only
    function displayLink() {
        var section = []
        if (link.length === 0) { //all blank
            section.push(
                <div className="form-group">
                    <label htmlFor="evaluation_form"><span>*</span>Evalution Form</label>
                    <input className="form-control" type="text" id="evaluation_form"
                        onChange={inputChange('evaluation_form')} placeholder="Insert form link"
                    />
                </div>
            )
        } else { //something existed but this empty
            if (!link[0].evaluation_form) {
                section.push(
                    <div className="form-group">
                        <label htmlFor="evaluation_form"><span>*</span>Evalution Form</label>
                        <input className="form-control" type="text" id="evaluation_form"
                            onChange={inputChange('evaluation_form')} placeholder="Insert form link"
                        />
                    </div>
                )
            }
            else if (link[0].evaluation_form === " " || link[0].evaluation_form === "") {
                section.push(
                    <div className="form-group">
                        <label htmlFor="evaluation_form"><span>*</span>Evalution Form</label>
                        <input className="form-control" type="text" id="evaluation_form"
                            onChange={inputChange('evaluation_form')} placeholder="Insert form link"
                        />
                    </div>
                )
            } else {
                section.push(
                    <div className="member-box">
                        <p>{link[0].evaluation_form}</p>
                        <button className="deleteBtn" type="button" onClick={() => { window.confirm("Are you sure you want to remove the link?") && removeLink("evaluation_form") }}> <FaTrashAlt /></button>
                    </div>
                )
            }
        }
        return section
    }
    function displayYoutubeLink() {
        var section = []
        if (link.length === 0) { //all blank
            section.push(
                <div className="form-group">
                    <label htmlFor="youtube_form"><span>*</span>Youtube Live Event</label>
                    <input className="form-control" type="text" id="youtube_form"
                        onChange={inputChange('youtube_form')} placeholder="Insert form link"
                    />
                </div>
            )
        } else { //something existed but this empty
            if (!link[0].youtube_form) {
                section.push(
                    <div className="form-group">
                        <label htmlFor="youtube_form"><span>*</span>Youtube Live Event</label>
                        <input className="form-control" type="text" id="youtube_form"
                            onChange={inputChange('youtube_form')} placeholder="Insert form link"
                        />
                    </div>
                )
            }
            else if (link[0].youtube_form === " " || link[0].youtube_form === "") {
                section.push(
                    <div className="form-group">
                        <label htmlFor="youtube_form"><span>*</span>Youtube Live Event</label>
                        <input className="form-control" type="text" id="youtube_form"
                            onChange={inputChange('youtube_form')} placeholder="Insert form link"
                        />
                    </div>
                )
            } else {
                section.push(
                    <div className="member-box">
                        <p>{link[0].youtube_form}</p>
                        <button className="deleteBtn" type="button" onClick={() => { window.confirm("Are you sure you want to remove the link?") && removeLink("youtube_form") }}> <FaTrashAlt /></button>
                    </div>
                )
            }
        }
        return section
    }
    function displayPosterLink() {
        var section = []
        if (link.length === 0) { //all blank
            section.push(
                <div className="form-group">
                    <label htmlFor="poster_form"><span>*</span>Ideation Poster Competition</label>
                    <input className="form-control" type="text" id="poster_form"
                        onChange={inputChange('poster_form')} placeholder="Insert form link"
                    />
                </div>
            )
        } else { //something existed but this empty
            if (!link[0].poster_form) {
                section.push(
                    <div className="form-group">
                        <label htmlFor="poster_form"><span>*</span>Ideation Poster Competition</label>
                        <input className="form-control" type="text" id="poster_form"
                            onChange={inputChange('poster_form')} placeholder="Insert form link"
                        />
                    </div>
                )
            }
            else if (link[0].poster_form === " " || link[0].poster_form === "") {
                section.push(
                    <div className="form-group">
                        <label htmlFor="poster_form"><span>*</span>Ideation Poster Competition</label>
                        <input className="form-control" type="text" id="poster_form"
                            onChange={inputChange('poster_form')} placeholder="Insert form link"
                        />
                    </div>
                )
            } else {
                section.push(
                    <div className="member-box">
                        <p>{link[0].poster_form}</p>
                        <button className="deleteBtn" type="button" onClick={() => { window.confirm("Are you sure you want to remove the link?") && removeLink("poster_form") }}> <FaTrashAlt /></button>
                    </div>
                )
            }
        }
        return section
    }
    function removeLink(form) {
        if (form === "evaluation_form") {
            var postData = {
                _id: link[0]._id,
                evaluation_form: " ",
                youtube_form: link[0].youtube_form,
                poster_form: link[0].poster_form,
            }
        } else if (form === "youtube_form") {
            postData = {
                _id: link[0]._id,
                evaluation_form: link[0].evaluation_form,
                youtube_form: " ",
                poster_form: link[0].poster_form,
            }
        } else if (form === "poster_form") {
            postData = {
                _id: link[0]._id,
                evaluation_form: link[0].evaluation_form,
                youtube_form: link[0].youtube_form,
                poster_form: " ",
            }
        }
        axiosInstance.post("/api/formLink/update", postData)
            .then(function (response) {
                window.location.reload();
            }).catch(function (error) {
                console.log(error);
            })
    }
    const handleForm = (e) => {
        e.preventDefault();
        setLoading(true);
        // perform all neccassary validations
        ///////update to db /////////////           
        var postData = {
            evaluation_form: data.evaluation_form,
            youtube_form: data.youtube_form,
            poster_form: data.poster_form,
        }
        if (link.length === 0) {
            axiosInstance.post("/api/formLink/create", postData)
                .then(function (response) {
                    setLoading(false);
                    window.location.href = '/admin_dashboard';
                }).catch(function (error) {
                    console.log(error);
                })
        }
        else {
            postData = {
                _id: link[0]._id,
                evaluation_form: data.evaluation_form,
                youtube_form: data.youtube_form,
                poster_form: data.poster_form,
            }
            axiosInstance.post("/api/formLink/update", postData)
                .then(function (response) {
                    setLoading(false);
                    window.location.href = '/admin_dashboard';
                }).catch(function (error) {
                    console.log(error);
                })
        }
    }
    return (
        <>
            <form onSubmit={handleForm}>        
                {loading ? <Loader /> : null}
                <div className="edit-form-container" style={{ marginTop: "5%", marginBottom: "5%" }}>
                    <h1 className="mb-5">Insert Link</h1>
                    {displayLink()}
                    {displayYoutubeLink()}
                    <Dialog/>
                    <br></br>
                    {displayPosterLink()}
                    <div className="btn-group">
                        <Link to="/admin_dashboard">
                            <button className="btn btn-danger back-btn">Back</button>
                        </Link>
                        <input className="btn btn-primary" type="submit" value="Update" />
                    </div>
                </div>
            </form>
        </>
    )
}
export default InsertLink;