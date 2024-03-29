import axios from 'axios';

const http = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
});

http.interceptors.response.use(
    response => response,
    error => {
        console.dir(error)
        return Promise.reject(error);
    }
);

export default http;
