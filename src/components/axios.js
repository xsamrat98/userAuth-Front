import axios from "axios";

const instance = axios.create({
  baseURL: "https://user-auth-pro.herokuapp.com/"
});

export default instance;
