export const getProductByCategoriesUpdateState = (state, action) => ({
  ...state,
  getProductByCategoriesAppResponse: action.payload.response,
});
