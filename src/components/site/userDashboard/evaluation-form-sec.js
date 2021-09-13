import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig.js';

function Evaluation_Form() {
  const [data, setData] = useState([]);
  const [assigned, setAssigned] = useState([])
  const [link, setLink] = useState([])
  const account_id = localStorage.getItem('user_id');

  useEffect(() => {
    axiosInstance.get("/api/judge/read", { params: { account_id: account_id } })
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
    axiosInstance.get("/api/evaluation/read", { params: { judge_id: data._id } })
      .then(function (response) {
        setAssigned(response.data.data)
      }).catch(function (error) {
        console.log(error);
      })
    axiosInstance.get("/api/formLink/read")
      .then(function (response) {
        setLink(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })

  }, [account_id, data._id])
  function displayLink() {
    var section = []
    if (link.length === 0) {
        section.push(
               <p>Evaluation Form Coming Soon</p>
        )
    }
    else if(link.length >= 1) {
      for(var i =0; i<link.length; i++){
        if(link[i].evaluation_form!=="" && link[i].poster_form!==""){        
            section.push(
            <p>Evaluation Form Coming Soon</p>
            )         
        }
      }
    }
    else {
      for(var i =0; i<link.length; i++){
        if(link[i].evaluation_form!==""){
          if(link[i].evaluation_form!==" "){
            section.push(
              <li style={{listStyle:"none"}}><a href={link[i].evaluation_form}> Evaluation Form</a></li>     
          )}
        }
        if(link[i].poster_form!==""){
          if(link[i].poster_form!==" "){
            section.push(
              <li style={{listStyle:"none"}}><a href={link[i].poster_form}> Ideation Poster Competition</a></li>        
          )}
        } 
      }
    }
    return section
}
  const columns = React.useMemo(
    () => [
      {
        Header: 'Assigned Competitor',
        columns: [
          {
            Header: 'Project Title',
            accessor: 'project_title'
          },
          {
            Header: 'Booth',
            accessor: 'competitor_acc_id',
            Cell: ({ row, value }) => (
              <Link className="btn btn-success" to={`/competition_booth/${value}`}>
                Visit
              </Link>
            )
          },
        ],
      },
    ],
    []
  )
  return (
    <div>
      <div className="member-box">
      {displayLink()}
      </div>
      <div>
        <Table columns={columns} data={assigned} />
      </div>
    </div>
  );
}

export default Evaluation_Form;