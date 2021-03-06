/* eslint-disable no-loop-func */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axiosInstance from '../../../../utils/axiosConfig.js';
import { FaTrashAlt } from 'react-icons/fa';
import Loader from './../../../site/Loader';

function AssignProject() {
    localStorage.setItem("activeKeys", "Judge")
    const [loading, setLoading] = useState(false)
    const [pair, setPair] = useState([])
    const [comp, setComp] = useState([])
    const [judge, setJudge] = useState([])
    const [competitor, setCompetitor] = useState([])

    const location = useLocation();
    const thePath = location.pathname;
    const user_id = thePath.substring(thePath.indexOf('/', 2) + 1, thePath.lastIndexOf('/'));
    const string = '"' + user_id + '"'

    useEffect(() => {
        setLoading(true);
        axiosInstance.get("/api/competitors/readAll")
            .then(function (response) {
                setCompetitor(response.data.data);
                setLoading(false);
            }).catch(function (error) {
                console.log(error);
            })
        axiosInstance.get("/api/judge/read", { params: { account_id: string } })
            .then(function (response) {
                setJudge(response.data.data);
                setLoading(false);
            }).catch(function (error) {
                console.log(error);
            })
        axiosInstance.get("/api/evaluation/read", { params: { judge_id: judge._id } })
            .then(function (response) {
                setPair(response.data.data);
                setLoading(false);
            }).catch(function (error) {
                console.log(error);
            })
    }, [judge._id, string])

    
    function deletePair(_id) {
        axiosInstance.get("/api/evaluation/deletePair",  { params: { _id: _id } })
        .then(function (response) {
            setLoading(true);
            window.location.reload();
            setLoading(false);
        }).catch(function (error) {
          console.log(error);
        })
      }
    const inputChange = input => e => {

        setComp({
            ...comp,
            [input]: e.target.value
        });
    }

    function displayCompetitors() {
        var section = [];
        var listCompetitors = [];
        // eslint-disable-next-line array-callback-return
        competitor.map((competitor) =>{

        if(competitor.abstract[0]){
            listCompetitors.push(<option value={competitor._id}>{competitor.abstract[0].title}</option>);
        }
    }
        );
        section.push(
            <div className="form-group">
                <label htmlFor="competitor_name"><span>*</span>Project Title </label>
                <select className="form-control" id="competitor_id" required
                    onChange={inputChange('competitor_id')} value={competitor._id} >
                    <option value="">Please Select</option>
                    {listCompetitors}
                </select>
            </div>
        )
        return section;
    }
   
    function displayPair() {
        var section = []
        for (var i = 0; i < pair.length; i++) {
            var tempPair = pair[i]
            section.push(
                <div className="displayPair">
                    <p>{pair[i].project_title}</p>
                    <button className="deleteBtn" type="button" onClick={() => {window.confirm("Are you sure you want to remove from the list?") && deletePair(tempPair._id)}}> <FaTrashAlt /></button>
                </div>
            )
        }
        return section;
    }
    const handleForm = (e) => {
        setLoading(true);
        // perform all neccassary validations
        var tempComp;
        for (var j = 0; j < competitor.length; j++) {
            if (competitor[j]._id === comp.competitor_id) {
                tempComp = competitor[j]
            }else{
                console.log("Please fix me!");
            }
        }
        var postData = {
            judge_id: judge._id,
            judge_name: judge.name,
            competitor_id: comp.competitor_id,
            competitor_name: tempComp.name,
            competitor_acc_id: tempComp.account_id.toString(),
            project_title:tempComp.abstract[0].title
        }
        axiosInstance.post("/api/evaluation/create", postData)
            .then(function (response) {
                setLoading(false);
            }).catch(function (error) {
                console.log(error)
            })
    }

    return (
        <div className="edit-form-container">
            {loading ? <Loader /> : null}
            <form onSubmit={handleForm}>
                <h1>Judge: {judge.title} {judge.name}</h1>
                {displayCompetitors()}
                <div className="row">
                    <div className="col-6">
                        <Link to="/admin_dashboard">
                            <button className="btn btn-danger">Back</button>
                        </Link>
                    </div>
                    <div className="col-6 text-right">
                        <input className="btn btn-primary" type="submit" value="Assign" />
                    </div>
                </div>
            </form>
            <table>
                <tr>
                    <th>Project Title</th>
                </tr>
                <tr>
                    <td>{displayPair()}</td>
                </tr>
            </table>
        </div>
    )
}
export default AssignProject;