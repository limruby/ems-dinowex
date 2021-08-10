import React, { useState, useEffect } from "react";
import Table from './Table.js';
import { Link } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';

function Competitor() {

  const [data, setData] = useState([]);


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
      </div>
    );

    }

    export default Competitor;