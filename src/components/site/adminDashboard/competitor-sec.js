import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import axiosInstance from '../../../utils/axiosConfig';
import { ReportBase } from "istanbul-lib-report";

function Competitor() {

  const [data, setData] = useState([]);
  const headers = [
    {label:'Full Name', key: 'name'},
    {label:'Gender', key: 'gender'},
    {label:'Phone Number', key: 'phone_no'},
    {label:'Category', key: 'category'},
    {label:'Affiliation', key: 'affiliation'},
    {label:'NRIC/Passport', key: 'nric_passport_no'},
    {label:'Address_1', key: 'address_1'},
    {label:'Address_2', key: 'address_2'},
    {label:'Postcode', key: 'postcode'},
    {label:'City', key: 'city'},
    {label:'State', key: 'state'},
    {label:'Country', key: 'country'},
    {label:'Payment', key: 'bill_status'},
  ]
  const csvReport = {
    filename: 'Dinowex_Competitor_List.csv',
    headers: headers,
    data: data
  }
    
  useEffect(() => {
    axiosInstance.get("/api/competitors/readAll")
      .then(function (response) {
        setData(response.data.data);
      }).catch(function (error) {
        console.log(error);
      })
  }, []);


  const columns = React.useMemo(
    () => [
    {
  
        Header: 'Profile',
        columns: [

          {
            Header: 'Category',
            accessor: 'category',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Payment Status',
            accessor: 'bill_status'
          },
          {
            Header: 'Bookchapter First Purchase',
            accessor: 'first_purchase'
          },
          {
            Header: 'Bill ID',
            accessor: 'bill_id'
          },          
          {
            Header: 'Edit',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original.account_id}/edit_profile_competitor`}>
                <button className="btn btn-success" >
                  Edit
                </button></Link>

            )
          },
          {
            Header: 'Upload Receipt',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original._id}/upload_receipt_competitor`}>
                <button className="btn btn-success" >
                  Upload
                </button></Link>

            )
          },
          {
            Header: 'Receipt Name',
            accessor: 'receipt[0].name'
          },
        ],
      },


    ],
    // []
  )

    return (
      <div className="App">  
        <Table columns={columns} data={data} />
        <CSVLink {...csvReport}>
      <button className="btn btn-success" >Export to CSV</button></CSVLink>  
      </div>
    );

    }

    export default Competitor;