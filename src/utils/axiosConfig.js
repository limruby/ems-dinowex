import axios from "axios";

const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: `${process.env.REACT_APP_BASEURL}`,
=======
  baseURL: 'http://localhost:5000' ,
>>>>>>> 2dbc05f (sponsor sign up updated)
  
});

axiosInstance.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');


export default axiosInstance;