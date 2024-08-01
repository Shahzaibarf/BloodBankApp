import axios from "axios";

const Axious_Instance = axios.create({ baseURL: process.env.REACT_APP_BASEURL });

// Deafult Header/Instace for ALL API Calls
Axious_Instance.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  req.headers.authorization = `Bearer ${token}`;
  req.headers.Accept = 'application/json';
  req.headers['Content-Type'] = 'application/json';

  return req;
});

export default Axious_Instance;
