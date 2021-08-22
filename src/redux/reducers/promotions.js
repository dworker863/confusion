import { fetchPromotions } from 'api/api';
import { setError } from './errors';

const SET_PROMOTIONS = 'confusion/promotions/SET_PROMOTIONS';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROMOTIONS:
      return [...state, ...payload];

    default:
      return state;
  }
};

export const setPromotions = (promotions) => ({
  type: SET_PROMOTIONS,
  payload: promotions,
});

export const getPromotions = () => (dispatch) => {
  fetchPromotions()
    .then((promotions) => {
      dispatch(setPromotions(promotions));
    })
    .catch(() => {
      const error = new Error('Failed to fetch promotions');
      dispatch(setError(error));
    });
};
