import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDM5OThjNzJjMTYyOTAxNTQ0YjgyNmJlMTFjOThhZCIsInN1YiI6IjViZTRjZjgzYzNhMzY4MTBiZjAzODI0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZipHVvmBkXtKG_5xtLFpWsNv9-5TeJehuVPzds6mRko'
  return req;
})

export default apiMovie;