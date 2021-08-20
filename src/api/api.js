import axios from 'axios';

let token = null;
const baseURL = 'https://localhost:3443/';

export const fetchDishes = () => {
  return axios.get(`${baseURL}dishes`).then((response) => response.data);
};

export const fetchPromotions = () => {
  return axios.get(`${baseURL}promotions`).then((response) => response.data);
};

export const fetchLeaders = () => {
  return axios.get(`${baseURL}leaders`).then((response) => response.data);
};

export const fetchFavorites = () => {
  return axios
    .get(`${baseURL}favorites`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      // eslint-disable-next-line no-debugger
      debugger;
      return response.data;
    });
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
    .get(`${baseURL}users/logout`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const postComment = (comment, dishId) => {
  return axios
    .post(`${baseURL}dishes/${dishId}/comments`, comment, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};
