const INCREASE_VALUE = 'INCREASE_VALUE';
const DECREASE_VALUE = 'DECREASE_VALUE';

export function increaseValue(amount) {
  return {
    type: INCREASE_VALUE,
    amount
  };
}

export function decreaseValue(amount) {
  return {
    type: DECREASE_VALUE,
    amount
  };
}
