export const loginUpdateState = (state, action) => ({
  ...state,
  loginAppResponse: action.payload.response,
});
