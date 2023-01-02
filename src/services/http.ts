import axios from 'axios';

const token = 'trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA=='; 

const http = axios.create({
  baseURL: 'https://destifyfunc-api-dev.azurewebsites.net/api'
});

http.defaults.headers.common['x-functions-key'] = token;

export default http;