import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const axiosApiBam =axios.create({
    baseURL: API_URL,
    headers: {
        // "Access-Control-Allow-Origin": "*",
        // "Content-Type": "application/json", //this line solved cors
        // "Accepts": "application/json",
        Authorization: `JWT ${JSON.parse(localStorage.getItem('am-user'))?.token}`,
      },
})

// axiosApiBam.interceptors.request.use((config) => {
//     config.headers = {
//         ...config.headers,
//         Authorization: `JWT ${JSON.parse(localStorage.getItem('am-user'))?.token}`,
//     };
//     return config
// });

// export {
//     axiosApiBam
// }
export default axiosApiBam