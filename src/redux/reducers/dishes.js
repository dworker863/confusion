import { fetchDishes, postComment } from 'api/api';

const SET_DISHES = 'confusion/dishes/SET_DISHES';
const SET_COMMENTS = 'confusion/dishes/SET_COMMENTS';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DISHES:
      return [...state, ...payload];

    case SET_COMMENTS:
      // eslint-disable-next-line no-case-declarations
      const index = state.findIndex((dish) => dish._id === payload.dishId);
      // eslint-disable-next-line no-case-declarations
      const stateCopy = [...state];
      stateCopy[index].comments = payload.comments;
      // eslint-disable-next-line no-debugger
      debugger;
      return stateCopy;

    default:
      return state;
  }
};

export const setDishes = (dishes) => ({
  type: SET_DISHES,
  payload: dishes,
});

export const setComments = (payload) => ({
  type: SET_COMMENTS,
  payload,
});

export const getDishes = () => (dispatch) => {
  fetchDishes().then((dishes) => {
    dispatch(setDishes(dishes));
  });
};

export const addComment = (comment, dishId) => (dispatch) => {
  postComment(comment, dishId).then((comments) => {
    dispatch(setComments({ dishId, comments: comments.comments }));
  });
};
