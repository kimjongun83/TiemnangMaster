import { all, takeLatest } from 'redux-saga/effects';

import { CategoryListAction } from '@/redux/actions/category';
import { getCategoryListSaga } from './getCategoryList';
export default function* root() {
  yield all([takeLatest(CategoryListAction.request.type, getCategoryListSaga)]);
}
