export const forgotPasswordUpdateState = (state, action) => ({
  ...state,
  forgotPasswordAppResponse: action.payload.response,
});
