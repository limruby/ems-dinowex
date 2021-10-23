import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';

function Links() {
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState();

  useEffect(() => {
    axiosInstance.get("/api/formLink/read")
      .then(function (response) {
        var result = response.data.data
        delete result.lobby;
        setData(result);
        setChecked(response.data.data.lobby);
      }).catch(function (error) {
        console.log(error);
      })
  }, []);

  const handleCheckBox = () => {
    setChecked(!checked)
  };

  const handleForm = (e) => {
    e.preventDefault();
    // perform all neccassary validations
    var postData = {
      lobby : checked
    }
    axiosInstance.post("/api/formLink/update", postData)
      .then(function (response) {
        // window.location.href = '/admin_dashboard';
      }).catch(function (error) {
        console.log(error)
      })
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = React.useMemo(
    () => [
      {
        Header: 'Event Links',
        columns: [
          {
            Header: 'Judge: Evaluation Link',
            accessor: 'evaluation_form',
          },
          {
            Header: 'Live Event: Youtube',
            accessor: 'youtube_form',
          },
          {
            Header: 'Ideation Poster Competition',
            accessor: 'poster_form',
          },
        ],
      },
    ],
    // []
  )
  return (
    <div className="empty-container">
      <div className="member-box">
        <Link to='/admin_dashboard/insert_evaluation_form_link'>
          <button className="btn btn-success" >
            Insert & Edit Links
          </button></Link>
      </div>
      <Table columns={columns} data={data} />
      <form onSubmit={handleForm}>
        <label>
          <span>Event Lobby</span>
          <input
            type="checkbox"
            onChange={handleCheckBox}
            checked={checked}
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>

  );
}

export default Links;