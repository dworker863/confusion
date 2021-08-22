/* eslint-disable no-lone-blocks */
import { login, logout } from 'api/api';

const SET_AUTH = 'confusion/auth/SET_AUTH';

const initialState = {
  username: localStorage.getItem('username'),
  auth: JSON.parse(localStorage.getItem('auth')),
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH:
      {
        if (localStorage.getItem('remember')) {
          localStorage.setItem('username', payload.username);
          localStorage.setItem('auth', payload.auth);
        }
      }
      return {
        username: payload.username,
        auth: payload.auth,
      };

    default:
      return state;
  }
};

export const setAuth = (payload) => ({
  type: SET_AUTH,
  payload,
});

export const getAuth = (username, password) => (dispatch) => {
  login(username, password).then((response) => {
    if (response.success) {
      dispatch(setAuth({ username, auth: true }));
    }
  });
};

export const dropAuth = () => (dispatch) => {
  logout().then(() => {
    localStorage.setItem('username', '');
    localStorage.setItem('auth', false);
    dispatch(setAuth({ username: '', auth: false }));
  });
};
