export const verifyUpdateState = (state, action) => ({
  ...state,
  verifyAppResponse: action.payload.response,
});
