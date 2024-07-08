import axios from 'axios'

const axiosApiBam =axios.create({
    baseURL: 'http://localhost:8080',
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