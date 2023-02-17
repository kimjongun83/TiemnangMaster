import { createReducer } from 'deox';
import { getProductByCategoriesAction } from '@/redux/actions';
import { getProductByCategoriesUpdateState } from './getProductByCategories';

const initialState = {
  getProductByCategoriesResponse: undefined,
};
console.log('GetProductByCategoriesResponse Reducer', initialState);
const ProductReducer = createReducer(initialState, (handleAction) => [
  handleAction(getProductByCategoriesAction.success, getProductByCategoriesUpdateState),
]);

export default ProductReducer;
