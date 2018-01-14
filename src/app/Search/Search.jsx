import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowCard from './components/ShowCard/ShowCard';
import Header from './components/Header/Header';

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
  // searchTerm: PropTypes.string.isRequired,
  shows: PropTypes.array.isRequired
};

// ===============================
// take a slice of state and map it to props
// ===
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
