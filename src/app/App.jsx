import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
// import classnames from 'classnames';
import store from './_store/store';
import AsyncRoute from './AsyncRoute';
import preload from '../../data.json';

// if (typeof require.ensure !== 'function')
//   require.ensure = (d, c) => {
//     c(require);
//   };
// if (typeof require.include !== 'function') require.include = () => {};

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          component={props => (
            <AsyncRoute props={props} loadingPromise={import('./Search/components/Landing/Landing')} />
          )}
        />
        <Route
          path="/search"
          component={props => (
            <AsyncRoute
              props={Object.assign({ shows: preload.shows }, props)}
              loadingPromise={import('./Search/Search')}
            />
          )}
        />
        {/* <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} /> */}
        <Route
          path="/details/:id"
          component={props => {
            const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
            return (
              <AsyncRoute
                props={Object.assign({ show: selectedShow, match: {} }, props)}
                show={selectedShow}
                loadingPromise={import('./Search/components/Details/Details')}
              />
            );
          }}
        />
        {/* <Route
          path="/details/:id"
          component={(props: { match: Match }) => {
            const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
            return <Details show={selectedShow} {...props} />;
          }}
        /> */}
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
);

App.propTypes = {
  match: PropTypes.object
};

export default App;
