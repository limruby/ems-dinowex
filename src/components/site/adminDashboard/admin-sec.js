import React, { useState, useEffect } from "react";
import Table from './Table.js';
import axiosInstance from '../../../utils/axiosConfig';
import Loader from './../../site/Loader';

function Account(){

  const [data, setData]=useState([]);
  const [loading, setLoading] = useState(false);
 
 
  useEffect(() => {
     
      setLoading(true);
      axiosInstance.get("/api/accounts/readAdmin")
        .then(function(response) {
          setData(response.data.data);
          setLoading(false);
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
      {loading ? <Loader /> : null}
      <Table columns={columns} data={data} />
    </div>
  );

}

export default Account;