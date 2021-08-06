import axios from 'axios';

const baseURL = 'https://localhost:3443';

// eslint-disable-next-line import/prefer-default-export
export const dishesAPI = () => {
  return axios.get(`${baseURL}/dishes`).then((response) => response.data);
};
