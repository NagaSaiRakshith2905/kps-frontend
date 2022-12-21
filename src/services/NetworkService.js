import axios from "axios";
let base_url1='http://localhost:8081/api/network/'

export function addNetwork(networkRequest) {
  let url = base_url1 + "add-network/";
  console.log(url);
  return axios.post(
    url,
    JSON.stringify(networkRequest), {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      
    }
  );
}

export function getAllNetwork() {
    let url = base_url1 + "get-all-networks/";
    return axios.get(url, {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }

  export function getById(id) {
    let url = base_url1 + "get-by-id/?id=" + id ;
    return axios.get(url, {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }

  export function updatetNetwork(network) {
    let url = base_url1 + "update-network/";
    return axios.put(url, {  
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }

  export function deleteNetwork(network) {
    let url = base_url1 + "delete-network/" ;
    return axios.delete(url, {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }

  export function analizepath(network) {
    let url = base_url1 + "analize-path/"  ;
    return axios.get(url, 
      JSON.stringify(network),  {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }