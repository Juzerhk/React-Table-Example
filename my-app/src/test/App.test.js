import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App/App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect'; 
import {getRestaurantData} from '../app/fetchData.js';
configure({ adapter: new Adapter() });

const link = "https://waraclecodetesting.azurewebsites.net/api/restaurants";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should render initial layout", () => {
  const component = shallow(<App />);
  expect(component.getElements()).toMatchSnapshot();
});

  it('should verify header title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header').text()).toEqual("Waracle's Restaurant List");
  });
  
  it('api call test',  async () => {
    const result = await getRestaurantData(link);
    await expect(result.length).toBeGreaterThan(0);
    await expect(Array.isArray(result)).toBe(true);
  });

