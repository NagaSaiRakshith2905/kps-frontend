import axios from "axios";
let base_url1 = "http://localhost:8081/api/network/";

export function addNetworkAPI(networkRequest) {
  let url = base_url1 + "add-network/";
  console.log(url);
  return axios.post(url, JSON.stringify(networkRequest), {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}

export function getAllNetworkAPI(username) {
  let url = base_url1 + "get-all-networks-for-user/?username=" + username;
  return axios.get(url, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}

export function getByIdAPI(id) {
  let url = base_url1 + "get-networks-by-id/?id=" + id;
  return axios.get(url, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}

export function updatetNetworkAPI(network) {
  let url = base_url1 + "update-network/";
  return axios.put(url, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}

export function deleteNetworkAPI(id) {
  let url = base_url1 + "delete-network-by-id/?id=" + id;
  return axios.delete(url, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}

export function analysepathAPI(network) {
  let url =
    base_url1 +
    "analyse-path/?src=" +
    network.src +
    "&dst=" +
    network.dst +
    "&network-id=" +
    network.networkId +
    "&user-defined-path=" +
    network.path;
  return axios.get(url, {
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
}
