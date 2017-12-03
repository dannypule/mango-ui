// @flow

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data';

const shows: any = [...preload];

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={props => <Landing props={props} />} />
        <Route path="/search" component={props => <Landing props={{ shows: shows, ...props }} />} />
        {/* <Route path="/search" component={props => <Search shows={preload.shows} {...props} />} /> */}
        <Route
          path="/details/:id"
          component={(props: { match: any }) => {
            const selectedShow = shows.find(show => props.match.params.id === show.imdbID);
            return <Details props={{ show: selectedShow, match: {}, props }} show={selectedShow} />;
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

export default App;
