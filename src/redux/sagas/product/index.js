import { all, takeLatest } from 'redux-saga/effects';

import { getProductByCategoriesAction } from '@/redux/actions/product';
import { getProductByCategoriesSaga } from './getProductByCategories';
export default function* root() {
  yield all([takeLatest(getProductByCategoriesAction.request.type, getProductByCategoriesSaga)]);
}
