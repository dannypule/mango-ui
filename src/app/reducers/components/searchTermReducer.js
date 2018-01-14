import { SET_SEARCH_TERM } from '../../actions/components/SearchActions';

const searchTermReducer = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

export default searchTermReducer;
