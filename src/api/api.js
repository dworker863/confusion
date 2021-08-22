import axios from 'axios';

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
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then((response) => response.data);
};

export const login = (username, password) => {
  return axios
    .post(`${baseURL}users/login`, { username, password })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      return response.data;
    });
};

export const logout = () => {
  return axios
    .get(`${baseURL}users/logout`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then((response) => response.data);
};

export const postComment = (comment, dishId) => {
  return axios
    .post(`${baseURL}dishes/${dishId}/comments`, comment, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then((response) => response.data);
};

export const postFavorite = (dishId) => {
  return axios
    .post(`${baseURL}favorites/${dishId}`, null, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then((response) => response.data);
};

export const removeFavorite = (dishId) => {
  return axios
    .delete(`${baseURL}favorites/${dishId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then((response) => response.data);
};
