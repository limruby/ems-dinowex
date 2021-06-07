import React, { useMemo,useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';
import {Link} from 'react-router-dom';

function Account(){

  const [data, setData]=useState([]);
 
 
  useEffect(() => {
     
 
      axiosInstance.get("/api/accounts/readAll")
        .then(function(response) {
          setData(response.data.data);
        }).catch(function(error) {
          console.log(error);
        })

    }, []);
 

const columns = React.useMemo(
    () => [
      {
        Header: 'Account',
        columns: [
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Password',
            accessor: 'password',
            Cell: data => (
              <button className="btn btn-success" >
                  <div>
          <Link to={`/admin_dashboard/${data.row.original._id}/edit_password`}>Edit</Link>
        </div>
              </button>
            )
          },
          {
            Header: 'Role',
            accessor: 'role'
          }
        ],
      },

     
    ],
    []
  )

  

  return (
    <div className="App">
     

      <Table columns={columns} data={data} />
    </div>
  );

}

export default Account;