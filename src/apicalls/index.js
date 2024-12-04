// import axios from 'axios';

// const axiosInstance = axios.create({
//     headers: {
//          Authorization : `Bearer ${localStorage.getItem('token')}`
//     }
// });

// export default axiosInstance;

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Add the base URL
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // Include Authorization header
    }
});

export default axiosInstance;
