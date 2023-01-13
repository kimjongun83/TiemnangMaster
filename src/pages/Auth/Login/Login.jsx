import { useState } from 'react';
import { Form } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from '@/containers/AuthForm';
import LogoPrimary from '@/assets/images/logo-primary.svg';
import Input from '@/components/Input';
import { Link, navigate } from '@reach/router';
import { LayoutPaths, Paths } from '@/pages/routers';
import Button from '@/components/Button';
import { ELoginAction, loginAction } from '@/redux/actions';
import { showNotification, validationRules } from '@/utils/functions';
import { ETypeNotification } from '@/common/enums';
import GoogleBtn from '@/components/GoogleBtn';

import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [, setFormValues] = useState({});

  const loginLoading = useSelector((state) => state.loadingReducer[ELoginAction.LOGIN]);
  const resetForm = () => {
    form.setFieldsValue({
      password: '',
      email: '',
    });
  };
  const handleSubmit = (values) => {
    const body = {
      email: values?.email,
      password: values?.password,
    };
    dispatch(loginAction.request({ body }, handleLoginSuccess));
    resetForm();
  };

  const handleLoginSuccess = (response) => {
    if (response.data.token) {
      navigate(`${LayoutPaths.Admin}${Paths.Users}`);
      showNotification(ETypeNotification.SUCCESS, response.message);
    }
  };
  return (
    <div className="Login">
      <AuthForm>
        <div className="Login-logo">
          <img src={LogoPrimary} alt="" />
        </div>
        <div className="Login-description">
          Start your <big>7-day</big> free trial, no credit card required Already signed up?{` `}
          <span>
            <Link to={`${LayoutPaths.Auth}${Paths.LoginApp}`}>Sign In</Link>
          </span>
        </div>
        <Form
          layout="vertical"
          form={form}
          className="Login-form"
          onFinish={handleSubmit}
          onValuesChange={(_, values) => setFormValues(values)}
        >
          <Form.Item name="email" rules={[validationRules.required(), validationRules.email()]}>
            <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
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
            <Input
              type="password"
              prefix={<LockOutlined />}
              placeholder="Password (8 characters at least)"
              size="large"
            />
          </Form.Item>

          <div className="Login-submit">
            <Button title="Get started" size="large" htmlType="submit" loading={loginLoading} />
          </div>
        </Form>

        <div className="Login-third-party flex items-center justify-center text-center">
          <span>or log in with Google</span>
        </div>
        <div className="Login-socials">
          <GoogleBtn />
        </div>

        <div className="Login-term">
          Registering to this website, you accept our <a href="#">terms of use</a> and{' '}
          <a href="#">privacy statements</a>.
        </div>
      </AuthForm>
    </div>
  );
};

export default Login;
