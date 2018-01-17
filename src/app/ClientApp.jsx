import React from 'react';
import { render } from 'react-dom';
import 'normalize.css/normalize.css';
import 'gridlex/dist/gridlex.min.css';
import '@blueprintjs/core/dist/blueprint.css';
// import Perf from 'react-addons-perf';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

// window.Perf = Perf; // does not currently work with React fiber
// Perf.start();

// can also use:
// Perf.stop()
// Perf.printWasted()
// Perf.printInclusive() --- exclusive of lifecycle methods
// Perf.printExclusive() --- exclusive of lifecycle methods

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    renderApp();
  });
}
