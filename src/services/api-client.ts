import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c4782beaff824feaab1d5e8a2d2d22f6'
    }
})