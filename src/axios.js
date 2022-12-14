import axios from "axios";
const loginURL = "api/user/login/";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_APP_URL,
});

const requestHandler = (request) => {
  if (!request.url.includes(loginURL)) {
    let token = localStorage.getItem("token");
    token = token || "";
    request.headers.Authorization = `Token ${token}`;
  }
  return request;
};


axiosInstance.interceptors.request.use((request) => requestHandler(request));

export default axiosInstance;
