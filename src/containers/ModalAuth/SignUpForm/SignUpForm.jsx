import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Input from '@/components/Input';
import { showNotification, validationRules } from '@/utils/functions';
import Button from '@/components/Button';
import BgModalAuth from '@/assets/images/bg-auth-modal.png';
import Favicon from '@/assets/images/favicon.png';
import { ERegisterAction, registerAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';

const SignUpForm = ({ onClickLogin, onRegisterSuccess }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [passwordValue, setPasswordValue] = useState('');
  const registerLoading = useSelector((state) => state.loadingReducer[ERegisterAction.REGISTER]);
  const handleSubmit = (values) => {
    const body = {
      email: values?.email,
      name: values?.name,
      password: values?.password,
      referrer: values?.referrer,
    };
    dispatch(registerAction.request({ body }, handleRegisterSuccess));
  };

  const handleRegisterSuccess = (response) => {
    if (response.statusCode === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, response.message);
      onRegisterSuccess?.(response?.data);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <div className="SignUpForm">
      <Form form={form} layout="vertical" className="ModalAuth-form" onFinish={handleSubmit}>
        <div className="ModalAuth-form-bg">
          <img src={BgModalAuth} alt="" />
        </div>
        <div className="ModalAuth-form-logo">
          <img src={Favicon} alt="" />
        </div>

        <Form.Item name="name" rules={[validationRules.required()]}>
          <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập" />
        </Form.Item>
        <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
          <Input label="Email" placeholder="Nhập email" />
        </Form.Item>
        <Form.Item name="password" rules={[validationRules.required()]}>
          <Input
            type="password"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu"
            onChange={(e) => {
              setPasswordValue(e);
            }}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[validationRules.required(), validationRules.confirmPassword(passwordValue)]}
        >
          <Input type="password" label="Nhập lại mật khẩu" placeholder="Nhập mật khẩu" />
        </Form.Item>
        <Form.Item name="referrer" rules={[]}>
          <Input label="Mã giới thiệu" placeholder="Nhập mã giới thiệu" />
        </Form.Item>

        <div className="ModalAuth-form-submit">
          <Button htmlType="submit" title="Đăng ký" type="primary" loading={registerLoading} />
        </div>

        <div className="ModalAuth-form-register">
          Bạn đã có tài khoản?
          <span onClick={onClickLogin}>Đăng nhập</span>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
