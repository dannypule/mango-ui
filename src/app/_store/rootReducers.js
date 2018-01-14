import { combineReducers } from 'redux';
import apiData from '../reducers/components/apiDataReducer';
import searchTerm from '../reducers/components/searchTermReducer';
import gotchas from '../reducers/components/gotchasReducer';

const rootReducer = combineReducers({ searchTerm, apiData, gotchas });

export default rootReducer;
