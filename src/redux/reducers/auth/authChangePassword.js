export const changePassWordUpdateState = (state, action) => ({
  ...state,
  changePassWordAppResponse: action.payload.response,
});
