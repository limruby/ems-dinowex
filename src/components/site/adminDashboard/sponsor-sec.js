import React, { useState, useEffect } from "react";
import Table from './Table.js';
import {Link} from 'react-router-dom';
import { CSVLink } from 'react-csv';
import axiosInstance from '../../../utils/axiosConfig';

function Sponsor(){

  const [data, setData]=useState([]);
  const headers = [
    {label:'Company Name', key: 'Company Name'},
    {label:'Company PIC Name', key: 'company_pic_name'},
    {label:'Company PIC IC', key: 'company_pic_ic'},
    {label:'Category', key: 'category'},
    {label:'Company Name', key: 'company_contact'},
    {label:'Company Website', key: 'company_website'},
    {label:'Address_1', key: 'address_1'},
    {label:'Address_2', key: 'address_2'},
    {label:'Postcode', key: 'postcode'},
    {label:'City', key: 'city'},
    {label:'State', key: 'state'},
    {label:'Country', key: 'country'},
    {label:'Payment', key: 'bill_status'},
    {label:'Sponsor Amount', key: 'amount'},
  ]
  const csvReport = {
    filename: 'Dinowex_Sponsor_List.csv',
    headers: headers,
    data: data
  }
  
  useEffect(() => {
    
    
    axiosInstance.get("/api/sponsors/readAll")
    .then(function(response) {
      setData(response.data.data);
    }).catch(function(error) {
      console.log(error);
    })

  }, []);
  

  const columns = React.useMemo(
    () => [
    {
        Header: 'Profile',
        columns: [
          {
            Header: 'Package',
            accessor: 'category',
          },
          {
            Header: 'Amount (RM)',
            accessor: 'amount',
          },
          {
            Header: 'Company',
            accessor: 'company_name',
          },
          {
            Header: 'PIC',
            accessor: 'company_pic_name',
          },
          {
            Header: 'Payment Status',
            accessor: 'bill_status',
          },
          {
            Header: 'Bill Id',
            accessor: 'bill_id',
          },          
          {
            Header: 'Edit',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original.account_id}/edit_profile_sponsor`}>
              <button className="btn btn-success" >
         Edit
              </button>
              </Link>
            )
          },
          {
            Header: 'Upload Receipt & Cert',
            Cell: data => (
              <Link to={`admin_dashboard/${data.row.original.account_id}/upload_receipt_sponsor`}>
                <button className="btn btn-success" >
                  Upload
                </button></Link>

            )
          },
          {
            Header: 'Receipt Name',
            accessor: 'receipt[0].name'
          },
          {
            Header: 'Cert Name',
            accessor: 'certificate[0].name'
          },
        ],
      },

      
      ],
      []
      )

      

  return (
    <div className="App">  
      <Table columns={columns} data={data} />
      <CSVLink {...csvReport}>
      <button className="btn btn-success" >Export to CSV</button></CSVLink>  
      </div>
  );

    }

    export default Sponsor;