import React, { useMemo,useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';

function Sponsor(){

  const [data, setData]=useState([]);
 
 
  useEffect(() => {
     
 
<<<<<<< HEAD
<<<<<<< HEAD
      axiosInstance.get("/api/sponsors/readAll")
        .then(function(response) {
          setData(response.data.data);
        }).catch(function(error) {
          console.log(error);
        })

=======
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
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
<<<<<<< HEAD
>>>>>>> b014062 (admindashboard_incomplete)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
    }, []);
 

const columns = React.useMemo(
    () => [
      {
<<<<<<< HEAD
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
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
        Header: 'Admin',
        columns: [
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Password',
            accessor: 'password',
<<<<<<< HEAD
>>>>>>> b014062 (admindashboard_incomplete)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
            Cell: cell => (
              <button className="btn btn-danger" >
                Edit
              </button>
            )
          },
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
          {
            Header: 'Role',
            accessor: 'role'
          }
<<<<<<< HEAD
>>>>>>> b014062 (admindashboard_incomplete)
=======
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
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