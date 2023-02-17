export const resendOTPUpdateState = (state, action) => ({
  ...state,
  resendOTPAppResponse: action.payload.response,
});
