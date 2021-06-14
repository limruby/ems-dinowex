import React, { useMemo, useState, useEffect } from "react";
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