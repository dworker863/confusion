import { fetchDishes, postComment } from 'api/api';

const SET_DISHES = 'confusion/dishes/SET_DISHES';
const SET_COMMENTS = 'confusion/dishes/SET_COMMENTS';
const SET_FETCHING = 'confusion/dishes/SET_FETCHING';
const SET_ERROR = 'confusion/dishes/SET_ERROR';

const initialState = {
  items: [],
  isFetching: false,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DISHES:
      return { ...state, items: payload };

    case SET_FETCHING:
      return { ...state, isFetching: payload };

    case SET_ERROR:
      return { ...state, errorMessage: payload };

    case SET_COMMENTS:
      // eslint-disable-next-line no-case-declarations
      const index = state.items.findIndex(
        (dish) => dish._id === payload.dishId,
      );
      // eslint-disable-next-line no-case-declarations
      const stateCopy = { ...state };
      stateCopy.items[index].comments = payload.comments;

      return stateCopy;

    default:
      return state;
  }
};

export const setDishes = (dishes) => ({
  type: SET_DISHES,
  payload: dishes,
});

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: comments,
});

export const setFetching = (payload) => ({
  type: SET_FETCHING,
  payload,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const getDishes = () => (dispatch) => {
  dispatch(setFetching(true));
  fetchDishes()
    .then((dishes) => {
      dispatch(setDishes(dishes));
      dispatch(setFetching(false));
    })
    .catch(() => {
      const error = new Error('Failed to fetch dishes');
      dispatch(setError(error.message));
    });
};

export const addComment = (comment, dishId) => (dispatch) => {
  dispatch(setFetching(true));
  postComment(comment, dishId)
    .then((comments) => {
      dispatch(setComments({ dishId, comments: comments.comments }));
      dispatch(setFetching(false));
    })
    .catch((error) => {
      if (error.response.status === 401) {
        const customError = new Error(
          'Only authorized users can leave a comment',
        );
        dispatch(setError(customError.message));
      }
    });
};
