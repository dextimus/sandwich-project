import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sandwich-project-ab4d4.firebaseio.com/'
});

export default instance;