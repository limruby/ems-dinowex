import React, { useMemo,useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';

function Competitor(){

  const [data, setData]=useState([]);
 
 
  useEffect(() => {
     
 
<<<<<<< HEAD
      axiosInstance.get("/api/competitors/readAll")
        .then(function(response) {
          setData(response.data.data);
        }).catch(function(error) {
          console.log(error);
        })
=======
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
>>>>>>> b014062 (admindashboard_incomplete)
    }, []);
 

const columns = React.useMemo(
    () => [
      {
<<<<<<< HEAD
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
=======
        Header: 'Account',
        columns: [
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Password',
            accessor: 'password',
>>>>>>> b014062 (admindashboard_incomplete)
            Cell: cell => (
              <button className="btn btn-danger" >
                Edit
              </button>
            )
          },
<<<<<<< HEAD
=======
          {
            Header: 'Role',
            accessor: 'role'
          }
>>>>>>> b014062 (admindashboard_incomplete)
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