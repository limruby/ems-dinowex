import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';
import { FaEye } from "react-icons/fa";
import Loader from './../../site/Loader';

function Links() {
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosInstance.get("/api/formLink/read")
      .then(function (response) {
        var result = response.data.data
        delete result.lobby;
        setData(result);
        setChecked(response.data.data[0].lobby);
        setLoading(false);
      }).catch(function (error) {
        console.log(error);
      })
  }, []);

  const handleCheckBox = () => {
    setChecked(!checked)
  };

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const answer = window.confirm("Are you sure?");
    if (answer) {
       // perform all neccassary validations
    var postData = {
      _id: data[0]._id,
      lobby: checked
    }
    axiosInstance.post("/api/formLink/update", postData)
      .then(function (response) {
        setLoading(false);
        window.location.href = '/admin_dashboard';
      }).catch(function (error) {
        console.log(error)
      })
    }
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
    <div className="App" id="eventlink">
      {loading ? <Loader /> : null}
      <div className="member-box">
        <Link to='/admin_dashboard/insert_evaluation_form_link'>
          <button className="btn btn-success" >
            Insert & Edit Links
          </button></Link>
      </div>
      <Table columns={columns} data={data}/>
      <hr />
      <form onSubmit={handleForm} className="toggle">
        <h2>Event Lobby Visibility <FaEye /></h2>
        <p>Please <b>TICK</b> and submit the checkbox to <b>DISPLAY EVENT LOBBY</b> and <b>HIDE REGISTRATION</b> in <b>PUBLIC</b>.</p>
        <p>Please <b>UNTICK</b> and submit the checkbox to <b>HIDE EVENT LOBBY</b> and <b>DISPLAY REGISTRATION</b> from <b>PUBLIC</b>.</p>
        <input
          type="checkbox"
          onChange={handleCheckBox}
          checked={checked}
        />
        <input className="btn btn-danger" type="submit" value="Submit" style={{margin: '20px 40px'}}/>
      </form>
    </div>

  );
}

export default Links;