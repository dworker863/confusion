import axios from 'axios';

let token = null;
const baseURL = 'https://localhost:3443/';

export const dishesAPI = () => {
  return axios.get(`${baseURL}dishes`).then((response) => response.data);
};

export const promotionsAPI = () => {
  return axios.get(`${baseURL}promotions`).then((response) => response.data);
};

export const leadersAPI = () => {
  return axios.get(`${baseURL}leaders`).then((response) => response.data);
};

export const login = (username, password) => {
  return axios
    .post(`${baseURL}users/login`, { username, password })
    .then((response) => {
      token = response.data.token;
      return response.data;
    });
};

export const logout = () => {
  return axios
    .get('https://localhost:3443/users/logout', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};
