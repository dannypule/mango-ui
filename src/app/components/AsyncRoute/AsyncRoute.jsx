import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Spinner from './_shared/components/Spinner';

class AsyncRoute extends Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }
  component = null;
  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    // return <Spinner />;
    return null;
  }
}

AsyncRoute.propTypes = {
  props: PropTypes.object.isRequired,
  loadingPromise: PropTypes.object.isRequired
};

export default AsyncRoute;
