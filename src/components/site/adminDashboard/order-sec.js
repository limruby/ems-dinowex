import React, { useState, useEffect } from "react";
import Table from './Table.js';
import {Link} from 'react-router-dom';
import axiosInstance from '../../../utils/axiosConfig';

function Order(){
  const [data, setData]=useState([]);
  useEffect(() => { 
    axiosInstance.get("/api/cart/readCart")
    .then(function(response) {
      setData(response.data.data);
    }).catch(function(error) {
      console.log(error);
    })

  }, []);
  function deleteOrder(cart_id) {

    axiosInstance.get("/api/cart/deleteOrder",  { params: { _id: cart_id } })
    .then(function (response) {
      localStorage.setItem("activeKeys", "Order")
       window.location.reload();
    }).catch(function (error) {
      console.log(error);
    })
  }

  const columns = React.useMemo(
    () => [
    {
        Header: 'Profile',
        columns: [
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Medal Quantity',
            accessor: 'medalQuantity',
          },
          // {
          //   Header: 'Book Quantity',
          //   accessor: 'bookQuantity',
          // },
          {
            Header: 'Certificate Quantity',
            accessor: 'certQuantity',
          },
          {
            Header: 'Total Price (RM)',
            accessor: 'total_price',
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
              <Link to={`admin_dashboard/${data.row.original._id}/edit_order_status`}>
              <button className="btn btn-success" >
         Edit
              </button>
              </Link>
            )
          },
        ],
      },
      {
        Header: 'Delete',
        Cell: data => (
          <button className="btn btn-danger" 
            type="button" 
            onClick={() => {window.confirm("Are you sure you want to delete this order?") && deleteOrder(data.row.original._id)}}
          >
          Delete
          </button>
        )
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

    export default Order;