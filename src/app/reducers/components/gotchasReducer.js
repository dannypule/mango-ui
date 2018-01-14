import createReducer from '../../helpers/create-reducer';

const initialState = { value: 0 };

export default createReducer(initialState, {
  INCREASE_VALUE: (state, { amount }) => Object.assign({}, state, { value: state.value + amount }),
  DECREASE_VALUE: (state, { amount }) => Object.assign({}, state, { value: state.value - amount }),
  RESET: state => Object.assign({}, state, { value: 0 }),
  ALT_RESET: () => initialState
});
