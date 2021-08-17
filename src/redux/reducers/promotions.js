import { fetchPromotions } from 'api/api';

const SET_PROMOTIONS = 'confusion/promotions/SET_PROMOTIONS';

const initialState = {
  items: [],
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROMOTIONS:
      return { ...state, items: payload };

    default:
      return state;
  }
};

export const setPromotions = (promotions) => ({
  type: SET_PROMOTIONS,
  payload: promotions,
});

export const getPromotions = () => (dispatch) => {
  fetchPromotions().then((promotions) => {
    dispatch(setPromotions(promotions));
  });
};
