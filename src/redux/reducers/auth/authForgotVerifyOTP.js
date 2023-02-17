export const forgotPasswordOTPUpdateState = (state, action) => ({
  ...state,
  forgotPasswordOTPAppResponse: action.payload.response,
});
