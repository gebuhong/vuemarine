import axios from "./http";
export function getPicture (data) {
  return axios({
    url: "/getPicture",
    method: "post",
    data
  });
}

