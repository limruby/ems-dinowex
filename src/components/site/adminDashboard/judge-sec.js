import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import axiosInstance from '../../../utils/axiosConfig';

function Judge() {
  const [data, setData] = useState([]);
  const [link, setLink] = useState([])
  const headers = [
    { label: 'Title', key: 'title' },
    { label: 'Full Name', key: 'name' },
    { label: 'Phone Number', key: 'phone_no' },
    { label: 'Affiliation', key: 'affiliation' },
    { label: 'Address_1', key: 'address_1' },
    { label: 'Address_2', key: 'address_2' },
    { label: 'Postcode', key: 'postcode' },
    { label: 'City', key: 'city' },
    { label: 'State', key: 'state' },
    { label: 'Country', key: 'country' },
  ]
  const csvReport = {
    filename: 'Dinowex_Judges_List.csv',
    headers: headers,
    data: data
  }
  useEffect(() => {
    axiosInstance.get("/api/judge/readAll")
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
    axiosInstance.get("/api/formLink/read")
      .then(function (response) {
        setLink(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, []);

  // function displayLink(){
  //   var section = []
  //   for(var i =0; i<link.length; i++){
  //       if(link[i].evaluation_form!=""){
  //         if(link[i].evaluation_form!=" "){
  //           section.push(
  //             <li><a href={link[i].evaluation_form}> Evaluation Form</a></li>     
  //         )}
  //       }
  //       if(link[i].youtube_form!=""){
  //         if(link[i].youtube_form!=" "){
  //           section.push(
  //             <li><a href={link[i].youtube_form}> Youtube Form</a></li>       
  //         )}
  //       }
  //       if(link[i].poster_form!=""){
  //         if(link[i].poster_form!=" "){
  //           section.push(
  //             <li><a href={link[i].poster_form}> Poster Form</a></li>        
  //         )}
  //       } 
  //     }  
  //   return section;
  // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = React.useMemo(
    () => [
      {
        Header: 'Profile',
        columns: [
          {
            Header: 'Judge',
            accessor: 'name',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Contact Number',
            accessor: 'phone_no',
          },
          {
            Header: 'Assign',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original.account_id}/assign_project_title`}>
                <button className="btn btn-success" >
                  Assign
                </button></Link>
            )
          },
          {
            Header: 'Edit',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original.account_id}/edit_profile_judge`}>
                <button className="btn btn-success" >
                  Edit
                </button></Link>
            )
          },
        ],
      },
    ],
    // []
  )
  return (
    <div className="App" id="competitor">
      <Table columns={columns} data={data} />
      <CSVLink {...csvReport}>
        <button className="btn btn-success" >Export to CSV</button></CSVLink>
    </div>
  );
}
export default Judge;