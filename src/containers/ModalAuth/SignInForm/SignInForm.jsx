import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import FacebookLogin, { RenderProps } from 'react-facebook-login/dist/facebook-login-render-props';
import Input from '@/components/Input';
import { validationRules, showNotification } from '@/utils/functions';
import Button from '@/components/Button';
import BgModalAuth from '@/assets/images/bg-auth-modal.png';
import Favicon from '@/assets/images/favicon.png';
import ImageFacebook from '@/assets/images/image-facebook.png';
import ImageGoogle from '@/assets/images/image-google.png';
import { ELoginAction, loginAction } from '@/redux/actions';
import AuthHelpers from '@/services/auth-helpers';
import { EResponseCode, ETypeNotification } from '@/common/enums';

const SignInForm = ({ onClickRegister, onClickForgotPassword, onLoginSuccess, onActiveAccount }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [, setFormValues] = useState({});
  const loginLoading = useSelector((state) => state.loadingReducer[ELoginAction.LOGIN]);
  const handleSubmit = (values) => {
    const body = {
      email: values?.email,
      password: values?.password,
    };
    dispatch(loginAction.request({ body }, handleLoginSuccess));
  };
  const handleLoginSuccess = (response) => {
    if (response.statusCode === EResponseCode.OK) {
      onLoginSuccess();
      form.resetFields();
      AuthHelpers.storeAccessToken(response.data.token);
      showNotification(ETypeNotification.SUCCESS, response.message);
    } else if (response.statusCode === EResponseCode.UNAUTHORIZED) {
      showNotification(ETypeNotification.ERROR, response.message);
      onActiveAccount?.(response?.data);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };

  return (
    <div className="SignInForm">
      <Form
        form={form}
        layout="vertical"
        className="ModalAuth-form"
        onFinish={handleSubmit}
        onValuesChange={(_, values) => setFormValues(values)}
      >
        <div className="ModalAuth-form-bg">
          <img src={BgModalAuth} alt="" />
        </div>
        <div className="ModalAuth-form-logo">
          <img src={Favicon} alt="" />
        </div>

        <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
          <Input label="Email" placeholder="Nhập email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            validationRules.required(),
            validationRules.minLength(5),
            validationRules.maxLength(60),
            validationRules.noSpecialKey(),
          ]}
        >
          <Input type="password" label="Mật khẩu" placeholder="Nhập mật khẩu" />
        </Form.Item>

        <div className="ModalAuth-form-register text-right" style={{ marginTop: '-2.4rem' }}>
          <span onClick={onClickForgotPassword}>Quên mật khẩu</span>
        </div>

        <div className="ModalAuth-form-submit">
          <Button htmlType="submit" title="Đăng nhập" type="primary" loading={loginLoading} />
        </div>

        <div className="ModalAuth-form-another-text">Hoặc</div>

        <div className="ModalAuth-form-socials">
          <FacebookLogin
            appId="471842248090696"
            render={(renderProps) => (
              <div
                onClick={renderProps.onClick}
                className={classNames('ModalAuth-form-socials-item flex items-center facebook')}
              >
                <div className="ModalAuth-form-socials-item-icon">
                  <img src={ImageFacebook} alt="" />
                </div>
                <div className="ModalAuth-form-socials-item-label">Đăng nhập với Facebook</div>
              </div>
            )}
          />

          <div className={classNames('ModalAuth-form-socials-item flex items-center google')}>
            <div className="ModalAuth-form-socials-item-icon">
              <img src={ImageGoogle} alt="" />
            </div>
            <div className="ModalAuth-form-socials-item-label">Đăng nhập với Google</div>
          </div>
        </div>

        <div className="ModalAuth-form-register">
          Bạn chưa có tài khoản?
          <span onClick={onClickRegister}>Đăng ký ngay</span>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
