import axios from "axios";

axios.defaults.baseURL = "https://whispering-plateau-35247-5ab0a29abf01.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
