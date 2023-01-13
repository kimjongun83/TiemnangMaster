export const registerUpdateState = (state, action) => ({
  ...state,
  registerAppResponse: action.payload.response,
});
