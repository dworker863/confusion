import { promotionsAPI } from 'api/api';

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
  promotionsAPI().then((promotions) => {
    dispatch(setPromotions(promotions));
  });
};
