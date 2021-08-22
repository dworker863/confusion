import { fetchPromotions } from 'api/api';

const SET_PROMOTIONS = 'confusion/promotions/SET_PROMOTIONS';
const SET_FETCHING = 'confusion/promotions/SET_FETCHING';
const SET_ERROR = 'confusion/promotions/SET_ERROR';

const initialState = {
  items: [],
  isFetching: false,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROMOTIONS:
      return { ...state, items: payload };

    case SET_FETCHING:
      return { ...state, isFetching: payload };

    case SET_ERROR:
      return { ...state, errorMessage: payload };

    default:
      return state;
  }
};

export const setPromotions = (promotions) => ({
  type: SET_PROMOTIONS,
  payload: promotions,
});

export const setFetching = (payload) => ({
  type: SET_FETCHING,
  payload,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const getPromotions = () => (dispatch) => {
  dispatch(setFetching(true));
  fetchPromotions()
    .then((promotions) => {
      dispatch(setPromotions(promotions));
      dispatch(setFetching(false));
    })
    .catch(() => {
      const error = new Error('Failed to fetch promotions');
      dispatch(setError(error.message));
    });
};
