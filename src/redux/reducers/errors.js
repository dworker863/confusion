const SET_ERROR = 'confusion/errors/SET_ERROR';

const initialState = {
  error: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
