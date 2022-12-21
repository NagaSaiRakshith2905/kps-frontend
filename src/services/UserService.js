import axios from "axios";
import { base_url } from "../util/constants";

export function registerUserApi(userData) {
  let url = base_url + "user/register/";
  return axios.post(url, JSON.stringify(userData), {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}

export function userLoginApi(value, password) {
  let url = base_url + "user/login/?value=" + value + "&password=" + password;
  return axios.get(url, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}

export function viewUserByIdApi(id) {
  let url = base_url + "user/get-by-id/" + id;
  return axios.get(url, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
export function userUpdatePasswordApi(value, password) {
  let url =
    base_url + "user/update-password/?value=" + value + "&password=" + password;
  return axios.put(url, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}

export function viewUserByUsernameApi(username) {
  let url = base_url + "user/get-by-username/" + username;
  return axios.get(url, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
