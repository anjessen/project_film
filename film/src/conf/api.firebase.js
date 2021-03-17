import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://movie-d2966-default-rtdb.firebaseio.com/'
});

export default apiFirebase;

