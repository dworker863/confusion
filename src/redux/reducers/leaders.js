import { fetchLeaders } from 'api/api';

const SET_LEADERS = 'confusion/leaders/SET_LEADERS';
const SET_FETCHING = 'confusion/leaders/SET_FETCHING';
const SET_ERROR = 'confusion/leaders/SET_ERROR';

const initialState = {
  items: [],
  isFetching: false,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LEADERS:
      return { ...state, items: payload };

    case SET_FETCHING:
      return { ...state, isFetching: payload };

    case SET_ERROR:
      return { ...state, errorMessage: payload };

    default:
      return state;
  }
};

export const setLeaders = (leaders) => ({
  type: SET_LEADERS,
  payload: leaders,
});

export const setFetching = (payload) => ({
  type: SET_FETCHING,
  payload,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const getLeaders = () => (dispatch) => {
  dispatch(setFetching(true));
  fetchLeaders()
    .then((leaders) => {
      dispatch(setLeaders(leaders));
      dispatch(setFetching(false));
    })
    .catch(() => {
      const error = new Error('Failed to fetch leaders');
      dispatch(setError(error.message));
    });
};
