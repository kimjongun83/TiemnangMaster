export const forgotPasswordResendOTPUpdateState = (state, action) => ({
  ...state,
  forgotPasswordResendOTPAppResponse: action.payload.response,
});
