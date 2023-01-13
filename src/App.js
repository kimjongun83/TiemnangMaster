import React from 'react';
import { Redirect, Router } from '@reach/router';

import { AuthRoute, LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Auth from '@/layouts/Auth';
import Admin from '@/layouts/Admin';

import './App.scss';

const App = () => {
  return (
    <>
      <div className="App">
        <Router primary={false}>
          <Guest path={LayoutPaths.Guest}>
            <PublicRoute path={Paths.Home} component={Pages.Home} />
            <PublicRoute path={Paths.Article} component={Pages.Article} />
            <PublicRoute path={Paths.AboutUs} component={Pages.AboutUs} />
            <PublicRoute path={Paths.Courses} component={Pages.Course} />
            <PublicRoute path={Paths.Consulting} component={Pages.Consulting} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.Home}`} />
          </Guest>

          <Auth path={LayoutPaths.Auth}>
            <PublicRoute path={Paths.Register} component={Pages.Register} />
            <PublicRoute path={Paths.Login} component={Pages.Login} />

            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Auth}${Paths.Login}`} />
          </Auth>

          <Admin path={LayoutPaths.Admin}>
            <ProtectedRoute path={Paths.Users} component={Pages.Users} />
            <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Admin}${Paths.Users}`} />
          </Admin>
        </Router>
      </div>
    </>
  );
};

export default App;
