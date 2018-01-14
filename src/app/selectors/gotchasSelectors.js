import { path } from 'ramda';

const getValue = state => path(['gotchas', 'value'], state);

const getFoo = state => path(['gotchas', 'foo'], state);

export { getValue, getFoo };
