import React, { useEffect } from 'react';
import { Redirect, Router } from '@reach/router';

import { LayoutPaths, Pages, Paths, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';

import './App.scss';
import { uiActions } from '@/redux/actions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const updateSize = () => {
      dispatch(uiActions.setDevice(window.innerWidth));
    };
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [dispatch]);
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
        </Router>
      </div>
    </>
  );
};

export default App;
