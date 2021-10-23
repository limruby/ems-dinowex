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
    console.log(link);
    if (link.length === 0) {
      section.push(
        <p>Evaluation Form Coming Soon</p>
      )
    }
    else if(link.length >= 1) {
      if(link[0].evaluation_form ==="" && link[0].poster_form ===""){        
          section.push(
          <p>Evaluation Form Coming Soon</p>
          )                  
      }
      else {
        if(link[0].evaluation_form){
          if(link[0].evaluation_form!==""){          
            section.push(
              <li style={{listStyle:"none"}}><a href={link[0].evaluation_form} target="_blank" rel="noreferrer"> Evaluation Form</a></li>     
            )
          }
        }
        if(link[0].poster_form){
          if(link[0].poster_form!==""){         
            section.push(
              <li style={{listStyle:"none"}}><a href={link[0].poster_form} target="_blank" rel="noreferrer" > Ideation Poster Competition</a></li>        
            )
          }
        }
      }
    }
    return section;
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
            <Link className="btn btn-success" to={`/competition_booth/${value}`} target="_blank" rel="noreferrer">
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