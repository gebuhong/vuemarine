import axios from "./http";

export function login(data) {
  return axios({
    url: "/login",
    method: "post",
    data
  });
}
