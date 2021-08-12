import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:3443/',
});

// eslint-disable-next-line import/prefer-default-export
export const dishesAPI = () => {
  return instance.get('dishes').then((response) => response.data);
};

export const promotionsAPI = () => {
  return instance.get('promotions').then((response) => response.data);
};

export const leadersAPI = () => {
  return instance.get('leaders').then((response) => response.data);
};
