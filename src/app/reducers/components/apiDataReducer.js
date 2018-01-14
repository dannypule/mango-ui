import { ADD_API_DATA } from '../../actions/components/SearchActions';

const apiDataReducer = (state = {}, action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
  }
  return state;
};

export default apiDataReducer;
