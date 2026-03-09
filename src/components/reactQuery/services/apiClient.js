import axios from "axios";

const axiosInstance = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
});

class APIClient{

endpoint

constructor(endpoint){
  this.endpoint = endpoint;
}

getAll = () => {
  return axiosInstance
    .get(this.endpoint)
    .then(res => res.data)
}

post = (data) => {
  return axiosInstance
    .post(this.endpoint,data)
    .then(res => res.data)
}

}

export default APIClient