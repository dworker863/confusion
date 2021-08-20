import { fetchFavorites, postFavorite, removeFavorite } from 'api/api';

const SET_FAVORITES = 'confusion/favorites/SET_FAVORITES';

const initialState = {
  dishes: [],
  user: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FAVORITES:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export const setFavorites = (favorites) => ({
  type: SET_FAVORITES,
  payload: favorites,
});

export const getFavorites = () => (dispatch) => {
  fetchFavorites().then((favorites) => {
    dispatch(setFavorites(favorites));
  });
};

export const addFavorite = (dishId) => (dispatch) => {
  postFavorite(dishId).then((favorites) => {
    dispatch(setFavorites(favorites));
  });
};

export const deleteFavorite = (dishId) => (dispatch) => {
  removeFavorite(dishId).then((favorites) => {
    dispatch(setFavorites(favorites));
  });
};
