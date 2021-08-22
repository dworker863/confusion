import { fetchLeaders } from 'api/api';
import { setError } from './errors';

const SET_LEADERS = 'confusion/leaders/SET_LEADERS';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LEADERS:
      return [...state, ...payload];

    default:
      return state;
  }
};

export const setLeaders = (leaders) => ({
  type: SET_LEADERS,
  payload: leaders,
});

export const getLeaders = () => (dispatch) => {
  fetchLeaders()
    .then((leaders) => {
      dispatch(setLeaders(leaders));
    })
    .catch(() => {
      const error = new Error('Failed to fetch leaders');
      dispatch(setError(error));
    });
};
