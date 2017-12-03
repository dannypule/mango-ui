import * as React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import preload from '../../data';
import store from '../store';
import { setSearchTerm } from '../actionCreators';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';

const shows: any = [...preload];

declare const test: any;
declare const expect: any;

test('Search renders correctly', () => {
  const component = shallow(<UnwrappedSearch shows={shows} searchTerm="" />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amound of shows', () => {
  const component = shallow(<UnwrappedSearch shows={shows} searchTerm="" />);
  expect(component.find(ShowCard).length).toEqual(shows.length);
});

test('Search should render correct amount of shows based on search term without Redux', () => {
  const searchWord = 'black';
  const component = shallow(<UnwrappedSearch shows={shows} searchTerm={searchWord} />);
  // component.find('input').simulate('change', { target: { value: searchWord } });
  const showCount = shows.filter(
    show => `${show.title} ${show.title}`.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0
  ).length;
  // console.log(showCount);
  expect(component.find(ShowCard).length).toEqual(showCount);
});

test('Search should render correct amount of shows based on search term with Redux', () => {
  const searchWord = 'black';
  store.dispatch(setSearchTerm(searchWord));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search shows={shows} searchTerm={searchWord} />
      </MemoryRouter>
    </Provider>
  );
  const showCount = shows.filter(
    show => `${show.title} ${show.title}`.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0
  ).length;
  // console.log(showCount);
  expect(component.find('.show-card').length).toEqual(showCount);
});
