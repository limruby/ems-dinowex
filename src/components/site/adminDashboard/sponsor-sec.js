import React, { useMemo,useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';

function Sponsor(){

  const [data, setData]=useState([]);
 
 
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
            Cell: cell => (
              <button className="btn btn-danger" >
                Edit
              </button>
            )
          },
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