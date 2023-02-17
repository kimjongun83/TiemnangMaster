import { all, takeLatest } from 'redux-saga/effects';

import { registerAction } from '@/redux/actions';
import { verifyAction } from '@/redux/actions';
import { verifySaga } from './authVerify';

import { registerSaga } from './register';
import { resendOTPSaga } from './authResendOTP';
import { resendOTPAction } from '@/redux/actions';

import { loginSaga } from './login';
import { loginAction } from '@/redux/actions';
import { forgotPasswordSaga } from './authForgot';
import { forgotPasswordAction } from '@/redux/actions';
import { forgotPasswordOTPAction } from '@/redux/actions';
import { forgotPasswordOTPSaga } from './authForgotVerifyOTP';
import { forgotPasswordResendOTPAction } from '@/redux/actions';
import { forgotPasswordResendOTPSaga } from './authForgotResendOTP';
import { changePassWordAction } from '@/redux/actions';
import { changePassWordSaga } from './authChangePassword';
export default function* root() {
  yield all([takeLatest(registerAction.request.type, registerSaga)]);
  yield all([takeLatest(loginAction.request.type, loginSaga)]);
  yield all([takeLatest(verifyAction.request.type, verifySaga)]);
  yield all([takeLatest(resendOTPAction.request.type, resendOTPSaga)]);
  yield all([takeLatest(forgotPasswordAction.request.type, forgotPasswordSaga)]);
  yield all([takeLatest(forgotPasswordOTPAction.request.type, forgotPasswordOTPSaga)]);
  yield all([takeLatest(forgotPasswordResendOTPAction.request.type, forgotPasswordResendOTPSaga)]);
  yield all([takeLatest(changePassWordAction.request.type, changePassWordSaga)]);
}
