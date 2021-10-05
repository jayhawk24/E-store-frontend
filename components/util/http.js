import axios from 'axios';

const get = (url, header) => {
    try {
        return axios.get(url, header);
    } catch (err) {
        console.log(err.message);
        return;
    }
};

const post = (url, data) => {
    try {
        return axios.get(url, data);
    } catch (err) {
        console.log(err.message);
    }
};

export { get, post };
