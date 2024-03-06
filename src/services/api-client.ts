import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '35e74ae3912c454db221fadc5c3e36e3'
    }
})