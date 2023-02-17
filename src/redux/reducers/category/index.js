import { createReducer } from 'deox';
import { getCategoryListUpdateState } from './getCategoryList';
import { CategoryListAction } from '@/redux/actions';

const initialState = {
  getCategoryListResponse: undefined,
};

const CategoryReducer = createReducer(initialState, (handleAction) => [
  handleAction(CategoryListAction.success, getCategoryListUpdateState),
]);

export default CategoryReducer;
