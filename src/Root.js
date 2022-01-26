/* This is the Root component mainly initializes Redux and React Router. */

import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ConnectedRouter } from 'connected-react-router';
import * as PropTypes from 'prop-types';
import React from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import history from './common/history';
import routeConfig from './common/routeConfig';
import store from './common/store';
import Footer from './features/common/components/Footer';
import Navbar from './features/common/components/Navbar';

setConfig({
  logLevel: 'debug',
});

function renderRouteConfigV3 (routes, contextPath) {
  // Resolve route config object in React Router v3.
  const children = []; // children component list

  const renderRoute = (item, routeContextPath) => {
    let newContextPath;
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    newContextPath = newContextPath.replace(/\/+/g, '/');
    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfigV3(item.childRoutes, newContextPath);
      children.push(
        <Route
          key={newContextPath}
          render={props =>
            <item.component {...props}>{childRoutes}</item.component>}
          path={newContextPath}
        />,
      );
    } else if (item.component) {
      children.push(
        <Route
          key={newContextPath}
          component={item.component}
          path={newContextPath}
          exact
        />,
      );
    } else if (item.childRoutes) {
      item.childRoutes.forEach(r => renderRoute(r, newContextPath));
    }
  };

  routes.forEach(item => renderRoute(item, contextPath));

  // Use Switch so that only the first matched route is rendered.
  return <Switch>{children}</Switch>;
}

const useStyles = makeStyles({
  Root: {
    backgroundColor: '#000',
    margin: 0,
    padding: 0,
    textDecoration: 'none',
    overflowX: 'hidden',
    '& .ContainerWrapper': {
      minHeight: 'calc(1080px - 622px)',
    },
  },
});

function ElevationScroll () {
  return null;
}

ElevationScroll.propTypes = { children: PropTypes.node };

function Root () {
  const children = renderRouteConfigV3(routeConfig, '/');
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.Root}>
        <ConnectedRouter history={history}>
          <Container>
            <Navbar />
          </Container>
          <Container>
            <div className='ContainerWrapper'>
              {children}
            </div>
          </Container>
          <Footer />
        </ConnectedRouter>
      </div>
    </Provider>
  );
}

export default hot(module)(Root);
