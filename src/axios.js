import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-backend-ks.herokuapp.com/"
})

export default instance;
