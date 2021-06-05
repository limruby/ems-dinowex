import React, { useMemo,useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';

function Competitor(){

  const [data, setData]=useState([]);
 
 
  useEffect(() => {
     
 
      // axiosInstance.get("/api/competitors/readAll")
      //   .then(function(response) {
      //     setData(response.data.data);
      //   }).catch(function(error) {
      //     console.log(error);
      //   })

        // axiosInstance.get("/api/accounts/readAll")  //filter
        // .then(function(response) {
        //   setData(response.data.data);
        // }).catch(function(error) {
        //   console.log(error);
        // })
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
            Cell: cell => (
              <button className="btn btn-danger" >
                Edit
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

export default Competitor;