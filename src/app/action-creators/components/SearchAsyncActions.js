import axios from 'axios';
import { addAPIData } from './SearchActionCreators';

export default function getAPIDetails(imdbID) {
  return dispatch => {
    axios
      .get(`http://localhost:3000/${imdbID}`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(err => {
        console.error('axios error', err); // eslint-disable-line no-console
      });
  };
}
