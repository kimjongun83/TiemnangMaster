import React, { lazy, Suspense } from 'react';
import { Redirect } from '@reach/router';

import AuthHelpers from '@/services/auth-helpers';
import Loading from '@/components/Loading';

const retryLoadComponent = (fn, retriesLeft = 5, interval = 1000) =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });

const Users = lazy(() => retryLoadComponent(() => import('@/pages/Admin/Users')));
const Register = lazy(() => retryLoadComponent(() => import('@/pages/Auth/Register')));
const Home = lazy(() => retryLoadComponent(() => import('@/pages/Client/pages/Home')));
const AboutUs = lazy(() => retryLoadComponent(() => import('@/pages/Client/pages/Contact')));
const Article = lazy(() => retryLoadComponent(() => import('@/pages/Client/pages/Article')));
const Login = lazy(() => retryLoadComponent(() => import('@/pages/Auth/Login')));
const Course = lazy(() => retryLoadComponent(() => import('@/pages/Client/pages/Course')));
const Consulting = lazy(() => retryLoadComponent(() => import('@/pages/Client/pages/Consulting')));
export const LayoutPaths = {
  Auth: '/auth',
  Guest: '/',
  Admin: '/admin',
};

export const ModulePaths = {
  Rest: '*',
};

export const Paths = {
  Home: '/',
  Users: '/users',
  Login: '/login',
  AboutUs: '/ve-chung-toi',
  Article: '/bai-viet',
  Courses: '/khoa-hoc',
  Consulting: '/tu-van',
  Register: '/register',

  Rest: '*',
};

export const Pages = {
  Users,
  Home,
  Register,
  Login,
  AboutUs,
  Article,
  Course,
  Consulting,
};

export const AuthRoute = ({ component: Component, ...rest }) => {
  const loggedIn = AuthHelpers.getAccessToken();

  return loggedIn ? (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Admin} />
  ) : (
    <Suspense fallback={<Loading style={{ minHeight: '100vh' }} />}>
      <Component {...rest} />
    </Suspense>
  );
};

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const loggedIn = AuthHelpers.getAccessToken();

  return loggedIn ? (
    <Suspense fallback={<Loading style={{ minHeight: '100vh' }} />}>
      <Component {...rest} />
    </Suspense>
  ) : (
    <Redirect from="" to={LayoutPaths.Auth} noThrow />
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Suspense fallback={<Loading style={{ minHeight: '100vh' }} />}>
    <Component {...rest} />
  </Suspense>
);
