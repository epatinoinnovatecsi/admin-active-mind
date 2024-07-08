import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const axiosApiBam =axios.create({
    baseURL: API_URL,
})

axiosApiBam.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        Authorization: `JWT ${JSON.parse(localStorage.getItem('am-user'))?.token}`,
    };
    return config
});

export {
    axiosApiBam
}