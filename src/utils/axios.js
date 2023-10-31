import Axios from 'axios';

const apiURL = 'https://jsonplaceholder.typicode.com';

const axios = Axios.create({
    withCredentials: true,
    baseURL: apiURL,
});

export default axios;
