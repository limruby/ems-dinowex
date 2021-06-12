import axios from "axios";

const axiosInstance = axios.create({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  baseURL: `${process.env.REACT_APP_BASEURL}`,
=======
  baseURL: 'https://localhost:5000' ,
=======
  baseURL: 'http://localhost:5000' ,
>>>>>>> f1505f4 (from yuzhi)
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
>>>>>>> b231f77 (https done but CORS issue for payment)
=======
  baseURL: `${process.env.REACT_APP_BASEURL}`,
>>>>>>> f9183b2 (update changes)
=======
  baseURL: `${process.env.REACT_APP_BASEURL}`,
>>>>>>> faff4f9 (payment gateway updated)
  
=======
  baseURL: `${process.env.REACT_APP_BASEURL}`,
>>>>>>> d66119a3842624f919323611cf66ba932f9a38ed
});

axiosInstance.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');


export default axiosInstance;