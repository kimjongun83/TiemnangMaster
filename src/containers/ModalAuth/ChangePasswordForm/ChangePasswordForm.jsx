import React, { useEffect, useState } from 'react';
import { Form } from 'antd';

import Input from '@/components/Input';
import { validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import BgModalAuth from '@/assets/images/bg-auth-modal.png';
import Favicon from '@/assets/images/favicon.png';
import { useDispatch, useSelector } from 'react-redux';

import { showNotification } from '@/utils/functions';
import { ETypeNotification, EResponseCode } from '@/common/enums';
import { EChangePassWordAction, changePassWordAction } from '@/redux/actions';
const ChangePasswordForm = ({ data, onAuthForgotResetSuccess }) => {
  console.log('data in Change PassWord', data);
  const [form] = Form.useForm();
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const changePassWordSuccessLoading = useSelector(
    (state) => state.loadingReducer[EChangePassWordAction.CHANGE_PASSWORD],
  );
  const handleSubmit = (values) => {
    const headers = {
      token: data?.token,
    };

    const body = {
      password: values.password,
      newPassword: values.password,
    };

    dispatch(changePassWordAction.request({ body, headers }, handleChangePasssWordSuccess));
  };
  const handleChangePasssWordSuccess = (response) => {
    if (response?.statusCode === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Đổi Mật Khẩu Thành Công');
      onAuthForgotResetSuccess?.();
    }
  };
  useEffect(() => {
    form.resetFields();
  }, [form]);
  return (
    <div className="ChangePasswordForm">
      <Form form={form} layout="vertical" className="ModalAuth-form" onFinish={handleSubmit}>
        <div className="ModalAuth-form-bg">
          <img src={BgModalAuth} alt="" />
        </div>
        <div className="ModalAuth-form-logo">
          <img src={Favicon} alt="" />
        </div>

        <div className="ModalAuth-content text-center">
          <div className="ModalAuth-content-title">Đổi mật khẩu</div>
          <div className="ModalAuth-content-description">Nhập mật khẩu mới để đăng nhập tài khoản</div>
        </div>

        <Form.Item name="password" rules={[validationRules.required()]} onChange={handleChange}>
          <Input type="password" label="Mật khẩu" placeholder="Nhập mật khẩu" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[validationRules.required(), validationRules.confirmPassword(passwordValue)]}
        >
          <Input type="password" label="Nhập lại mật khẩu" placeholder="Nhập mật khẩu" />
        </Form.Item>

        <div className="ModalAuth-form-submit">
          <Button htmlType="submit" title="Hoàn thành" type="primary" loading={changePassWordSuccessLoading} />
        </div>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
