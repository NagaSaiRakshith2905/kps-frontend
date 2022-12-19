import axios from "axios";
export const base_url='http://localhost:8081/api/network/'

export function addNetwork(networkRequest) {
  let url = base_url + "add-network/";
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
    let url = base_url + "get-all-networks/";
    return axios.get(url, {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }

  export function getById(id) {
    let url = base_url + "get-by-id/?id=" + id ;
    return axios.get(url, {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }

  export function updatetNetwork(network) {
    let url = base_url + "update-network/";
    return axios.put(url, 
      JSON.stringify(network), {  
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }

  export function deleteNetwork(network) {
    let url = base_url + "delete-network/" ;
    return axios.delete(url, {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }

  export function analizepath(network) {
    let url = base_url + "analize-path/"  ;
    return axios.get(url, 
      JSON.stringify(network),  {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  }
