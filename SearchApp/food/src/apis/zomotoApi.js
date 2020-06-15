const { default: Axios } = require("axios")

import axios from 'axios';

export default axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1",
    headers: {
        'Accept': '*/*',
        "user-key": "9a466b076305728d89a09047a7d9a840"
    }
});
