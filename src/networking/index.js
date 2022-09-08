import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://cdv.dei.uc.pt/wp-json/wp/v2',
    timeout: 150 * 1000,
});

const api = {
    getPosts(query) {
        return axiosInstance.get('/posts' + query);
    },
};

export default api;
