import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import userSaga from './user';
import productSaga from './product';
import categorySaga from './category';
const rootSaga = function* root() {
  yield all([fork(authSaga), fork(userSaga), fork(productSaga), fork(categorySaga)]);
};

export default rootSaga;
