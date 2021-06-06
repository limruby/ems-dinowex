import axios from "axios";

const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: `${process.env.REACT_APP_BASEURL}`,
=======
  baseURL: 'https://localhost:5000' ,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
>>>>>>> b231f77 (https done but CORS issue for payment)
  
});

axiosInstance.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');


export default axiosInstance;