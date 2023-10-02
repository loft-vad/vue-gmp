import axios from 'axios';

const apiURL = "https://tame-erin-pike-toga.cyclic.app"

const apiClient = axios.create({
    baseURL: apiURL,
    headers: {
    'Content-Type': 'application/json',
    },
});

export default apiClient;