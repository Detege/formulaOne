import axios from "axios";

export default axios.create({
    baseURL: 'https://api.openf1.org/v1'
})