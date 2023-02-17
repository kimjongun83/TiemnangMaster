import { createReducer } from 'deox';

import { registerAction } from '@/redux/actions';
import { registerUpdateState } from './register';

import { verifyAction } from '@/redux/actions';
import { verifyUpdateState } from './authVerify';

import { resendOTPAction } from '@/redux/actions';
import { resendOTPUpdateState } from './authResendOTP';

import { loginAction } from '@/redux/actions';
import { loginUpdateState } from './login';

import { forgotPasswordAction } from '@/redux/actions';
import { forgotPasswordUpdateState } from './authForgot';

import { forgotPasswordOTPAction } from '@/redux/actions';
import { forgotPasswordOTPUpdateState } from './authForgotVerifyOTP';

import { forgotPasswordResendOTPAction } from '@/redux/actions';
import { forgotPasswordResendOTPUpdateState } from './authForgotResendOTP';
import { changePassWordAction } from '@/redux/actions';
import { changePassWordSaga } from '@/redux/sagas/auth/authChangePassword';
const initialState = {
  changePasswordResponse: undefined,
  googleLoginResponse: undefined,
  loginResponse: undefined,
  registerResponse: undefined,
  verifyResponse: undefined,
  resetPasswordResponse: undefined,
  resendOTPResponse: undefined,
  forgotPasswordResponse: undefined,
  forgotPasswordOTPResponse: undefined,
  forgotPasswordResendOTPResponse: undefined,
  changePasswordResponse: undefined,
};

const AuthReducer = createReducer(initialState, (handleAction) => [
  handleAction(registerAction.success, registerUpdateState),
  handleAction(loginAction.success, loginUpdateState),
  handleAction(verifyAction.success, verifyUpdateState),
  handleAction(resendOTPAction.success, resendOTPUpdateState),
  handleAction(forgotPasswordAction.success, forgotPasswordUpdateState),
  handleAction(forgotPasswordOTPAction.success, forgotPasswordOTPUpdateState),
  handleAction(forgotPasswordResendOTPAction.success, forgotPasswordResendOTPUpdateState),
  handleAction(changePassWordAction.success, changePassWordSaga),
]);

export default AuthReducer;
