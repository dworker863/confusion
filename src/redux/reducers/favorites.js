import { fetchFavorites, postFavorite, removeFavorite } from 'api/api';

const SET_FAVORITES = 'confusion/favorites/SET_FAVORITES';
const SET_FETCHING = 'confusion/favorites/SET_FETCHING';

const initialState = {
  dishes: [],
  user: null,
  isFetching: false,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FAVORITES:
      return { ...state, dishes: payload.dishes, user: payload.user };

    case SET_FETCHING:
      return { ...state, isFetching: payload };

    default:
      return state;
  }
};

export const setFavorites = (favorites) => ({
  type: SET_FAVORITES,
  payload: favorites,
});

export const setFetching = (payload) => ({
  type: SET_FETCHING,
  payload,
});

export const getFavorites = () => (dispatch) => {
  dispatch(setFetching(true));
  fetchFavorites().then((favorites) => {
    dispatch(setFavorites(favorites));
    dispatch(setFetching(false));
  });
};

export const addFavorite = (dishId) => (dispatch) => {
  dispatch(setFetching(true));
  postFavorite(dishId).then((favorites) => {
    dispatch(setFavorites(favorites));
    dispatch(setFetching(false));
  });
};

export const deleteFavorite = (dishId) => (dispatch) => {
  dispatch(setFetching(true));
  removeFavorite(dishId).then((favorites) => {
    dispatch(setFavorites(favorites));
    dispatch(setFetching(false));
  });
};
