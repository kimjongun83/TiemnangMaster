import { all, takeLatest } from 'redux-saga/effects';

import { registerAction } from '@/redux/actions';

import { registerSaga } from './register';

import { loginSaga } from './login';
import { loginAction } from '@/redux/actions';

export default function* root() {
  yield all([takeLatest(registerAction.request.type, registerSaga)]);
  yield all([takeLatest(loginAction.request.type, loginSaga)]);
}
