export const getCategoryListUpdateState = (state, action) => ({
  ...state,
  getCategoryListAppResponse: action.payload.response,
});
