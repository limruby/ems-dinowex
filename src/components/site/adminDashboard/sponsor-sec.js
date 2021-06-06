import React, { useMemo,useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';

function Sponsor(){

  const [data, setData]=useState([]);
 
 
  useEffect(() => {
     
 
<<<<<<< HEAD
      axiosInstance.get("/api/sponsors/readAll")
        .then(function(response) {
          setData(response.data.data);
        }).catch(function(error) {
          console.log(error);
        })

=======
      // axiosInstance.get("/api/accounts/readAll")
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
            Header: 'Package',
            accessor: 'category',
          },
          {
            Header: 'Company',
            accessor: 'company_name',
          },
          {
            Header: 'Company PIC',
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
=======
        Header: 'Admin',
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

export default Sponsor;