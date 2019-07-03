import Axios from "axios";

const api = Axios.create({
  baseURL: "http://172.18.16.70:3001"
});

export default api;
