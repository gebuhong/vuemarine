import axios from "axios";

let Url = "http://localhost:9003";

axios.defaults.baseURL = Url;

/*axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${window.sessionStorage.getItem(
    "token"
  )}`;
  return config;
});*/

export default axios;
