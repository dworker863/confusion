import { dishesAPI } from 'api/api';

const SET_DISHES = 'confusion/dishes/SET_DISHES';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DISHES:
      return [...state, ...payload];

    default:
      return state;
  }
};

export const setDishes = (dishes) => ({
  type: SET_DISHES,
  payload: dishes,
});

export const getDishes = () => (dispatch) => {
  dishesAPI().then((dishes) => {
    dispatch(setDishes(dishes));
  });
};
