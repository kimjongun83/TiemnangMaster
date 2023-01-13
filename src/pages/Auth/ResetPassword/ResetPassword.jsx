import React from 'react';
import { Form } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import AuthForm from '@/containers/AuthForm';
import Input from '@/components/Input';
import { Link, navigate } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Button from '@/components/Button';
import { EResetPasswordAction, resetPasswordAction } from '@/redux/actions';
import { showNotification, validationRules } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';

import './ResetPassword.scss';

const ResetPassword = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const resetPasswordLoading = useSelector((state) => state.loadingReducer[EResetPasswordAction.RESET_PASSWORD]);

  const handleSubmit = (values) => {
    const body = { ...values };
    dispatch(resetPasswordAction.request({ body }, () => handleResetPasswordSuccess(body)));
  };

  const handleResetPasswordSuccess = (values) => {
    navigate(`${LayoutPaths.Auth}${Paths.CheckYourEmail}`, { state: { email: values.email } });
  };

  return (
    <div className="ResetPassword">
      <AuthForm>
        <div className="ResetPassword-title">Reset Password</div>
        <div className="ResetPassword-description">
          Please enter the email associated with your account and we'll send. a email with instuctions to reset your
          password.
        </div>
        <Form layout="vertical" form={form} className="ResetPassword-form" onFinish={handleSubmit}>
          {/* <Form.Item name="username" rules={[validationRules.required()]}>
            <Input prefix={<UserOutlined />} placeholder="Username " size="large" />
          </Form.Item> */}
          <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
            <Input prefix={<MailOutlined />} placeholder="Email " size="large" />
          </Form.Item>

          <div className="ResetPassword-submit">
            <Button title="Send Instructions" size="large" htmlType="submit" loading={resetPasswordLoading} />
          </div>
        </Form>

        <div className="ResetPassword-description">
          <i>
            You remember your password?{' '}
            <span>
              <Link to={`${LayoutPaths.Auth}${Paths.LoginApp}`}>Sign in</Link>
            </span>
          </i>
        </div>
      </AuthForm>
    </div>
  );
};

export default ResetPassword;
