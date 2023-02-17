import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  EForgotPasswordOTPAction,
  EResendOTPAction,
  EVerifyAction,
  EForgotPasswordResendOTPAction,
  forgotPasswordResendOTPAction,
  forgotPasswordOTPAction,
  resendOTPAction,
  verifyAction,
} from '@/redux/actions';
import { showNotification } from '@/utils/functions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import Button from '@/components/Button';
import BgModalAuth from '@/assets/images/bg-auth-modal.png';
import Favicon from '@/assets/images/favicon.png';
import { EKeyStateModalAuth } from '@/containers/ModalAuth/ModalAuth.enum';
import Passcode from '@/components/Passcode';

const VerifyOtpForm = ({ keyVisible, data, onVerifyRegisterSuccess, onVerifyForgotSuccess }) => {
  const dispatch = useDispatch();
  const isVerifyRegister = keyVisible === EKeyStateModalAuth.VERIFY_OTP_REGISTER;

  const [passcode, setPasscode] = useState('');
  const verifyLoading = useSelector((state) => state.loadingReducer[EVerifyAction.VERIFY]);
  const resendOTPLoading = useSelector((state) => state.loadingReducer[EResendOTPAction.RESEND_OTP]);
  const forgotPasswordOTPLoading = useSelector(
    (state) => state.loadingReducer[EForgotPasswordOTPAction.FORGOT_PASSWORD_OTP],
  );
  const loading = verifyLoading || forgotPasswordOTPLoading;
  const handleSubmit = () => {
    const headers = {
      token: data?.token,
    };

    const body = {
      otp: passcode,
    };
    if (isVerifyRegister) {
      dispatch(verifyAction.request({ body, headers }, handleVerifySuccess));
    } else {
      dispatch(forgotPasswordOTPAction.request({ body, headers }, handleVerifySuccess));
    }
  };
  const handleVerifySuccess = (response) => {
    if (response.statusCode === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, response.message);
      if (isVerifyRegister) {
        onVerifyRegisterSuccess(data);
      } else {
        onVerifyForgotSuccess?.(data);
      }
    }
  };
  const handleResendOTP = () => {
    const headers = {
      token: data?.token,
    };

    const body = {
      otp: passcode,
    };
    if (isVerifyRegister) {
      dispatch(resendOTPAction.request({ body, headers }, handleResendOTPSuccess));
    } else {
      dispatch(forgotPasswordResendOTPAction.request({ body, headers }, handleResendOTPSuccess));
    }
  };
  const handleResendOTPSuccess = (response) => {
    if (response?.statusCode === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, response?.message);
    }
  };

  return (
    <div className="VerifyOtpForm">
      <div className="ModalAuth-form">
        <div className="ModalAuth-form-bg">
          <img src={BgModalAuth} alt="" />
        </div>
        <div className="ModalAuth-form-logo">
          <img src={Favicon} alt="" />
        </div>

        <div className="ModalAuth-content text-center">
          <div className="ModalAuth-content-title">Xác thực tài khoản</div>
          <div className="ModalAuth-content-description">Vui lòng nhập mã OTP được gửi đến email</div>
        </div>

        <Passcode onChange={setPasscode} onSubmit={setPasscode} />

        <div className="ModalAuth-form-submit" style={{ margin: '4rem 0 1.6rem' }}>
          <Button title="Xác nhận" type="primary" onClick={handleSubmit} loading={loading} />
        </div>

        <div className={classNames('ModalAuth-form-register flex items-center justify-center')}>
          Không nhận được mã?
          <span style={{ paddingRight: 12 }} onClick={handleResendOTP} loading={resendOTPLoading}>
            Gửi lại
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpForm;
