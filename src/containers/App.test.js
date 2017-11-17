import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Header from '../Components/Header/header';
import Main from './Main/main';

Enzyme.configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
});

test('App Page renders with header ', () => {
  const component = shallow(<App />);
  expect(component.containsAllMatchingElements([
    <Header/>,
    <Main/>
  ])).toBe(true)
})