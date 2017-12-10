import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = props => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => `${show.title} ${show.title}`.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >= 0)
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired, // eslint-disable-line
  shows: PropTypes.array.isRequired // eslint-disable-line react/forbid-prop-types
};

// ===============================
// take a slice of state and map it to props
// ===
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
