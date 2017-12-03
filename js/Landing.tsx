// @flow

import * as React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

declare const input: any;

class Landing extends React.Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    clearSearchTerm: Function,
    history: any
  };

  goToSearch = (event: any) => {
    event.preventDefault();
    this.props.history.push('/search'); // history is now injected into every route so no need to use context
  };

  browseAll = (event: any) => {
    event.preventDefault();
    this.props.clearSearchTerm('');
    this.props.history.push('/search'); // history is now injected into every route so no need to use context
  };

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={e => this.props.handleSearchTermChange(e)}
            value={this.props.searchTerm}
            type="text"
            placeholder="search"
          />
        </form>
        <button onClick={this.browseAll}>or Browse All</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm }); // subscribe to a slice of state

// insert some dispatch-ability into the component via props
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange: event => {
    dispatch(setSearchTerm(event.target.value));
  },
  clearSearchTerm: () => {
    dispatch(setSearchTerm(''));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
