import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cdv-dev.dei.uc.pt/wp-json/wp/v2',
  timeout: 150 * 1000,
});

const api = {
  getPosts(query) {
    return axiosInstance.get('/posts' + query);
  },
  getUsers(query) {
    return axiosInstance.get('/authors' + query);
  },
};

export default api;
