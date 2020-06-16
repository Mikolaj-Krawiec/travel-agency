import React from 'react';
import TripSummary from './TripSummary';
import {shallow} from 'enzyme';

describe('<TripSummary>', () => {
  it('should render Link and img correctly ', () => {
    const expectedId = 'abc';
    const name = 'name';
    const image = 'image.jpg';
    const cost = '123';
    const days = 321;
    const component = shallow(
      <TripSummary
        tags={['']}
        id={expectedId}
        image={image}
        name={name}
        cost={cost}
        days={days}
      />);
    expect(component.find('Link').prop('to')).toEqual('/trip/'+ expectedId);
    expect(component.find('img').prop('src')).toEqual(image);
    expect(component.find('img').prop('alt')).toEqual(name);
  });

  it('should render props days cost and name correctly ', () => {
    const expectedId = 'abc';
    const name = 'name';
    const image = 'image.jpg';
    const cost = '123';
    const days = 321;
    const component = shallow(
      <TripSummary
        tags={['']}
        id={expectedId}
        image={image}
        name={name}
        cost={cost}
        days={days}
      />);
    expect(component.find('.title').text()).toEqual(name);
    expect(component.find('span').at(0).text()).toEqual(days + ' days');
    expect(component.find('span').at(1).text()).toEqual('from '+ cost);
    // console.log(component.debug());
  });

  it('should throw error without props id', () => {
    expect(() => shallow(
      <TripSummary
        tags={['first', 'second', 'third']}
        image='image.jpg'
        cost='123'
        name='name'
        days={321}
      />)).toThrow();
  });

  it('should throw error without props image', () => {
    expect(() => shallow(
      <TripSummary
        tags={['first', 'second', 'third']}
        id='abc'
        cost='123'
        name='name'
        days={321}
      />)).toThrow();
  });

  it('should throw error without props name', () => {
    expect(() => shallow(
      <TripSummary
        tags={['first', 'second', 'third']}
        id='abc'
        image='image.jpg'
        cost='123'
        days={321}
      />)).toThrow();
  });

  it('should throw error without props cost', () => {
    expect(() => shallow(
      <TripSummary
        tags={['first', 'second', 'third']}
        id='abc'
        image='image.jpg'
        name='name'
        days={321}
      />)).toThrow();
  });

  it('should throw error without props days', () => {
    expect(() => shallow(
      <TripSummary
        tags={['first', 'second', 'third']}
        id='abc'
        image='image.jpg'
        name='name'
        cost='123'
      />)).toThrow();
  });

  it('should render tags correctly ', () => {
    const component = shallow(
      <TripSummary
        tags={['first', 'second', 'third']}
        id='abc'
        image='image.jpg'
        name='name'
        cost='123'
        days={321}
      />);
    expect(component.find('.tag').at(0).text()).toEqual('first');
    expect(component.find('.tag').at(1).text()).toEqual('second');
    expect(component.find('.tag').at(2).text()).toEqual('third');
  });

  it('should NOT render .tags without props with tags array', () => {
    const expectedId = 'abc';
    const name = 'name';
    const image = 'image.jpg';
    const cost = '123';
    const days = 321;
    const component = shallow(
      <TripSummary
        id={expectedId}
        image={image}
        name={name}
        cost={cost}
        days={days}
      />);
    expect(component.find('.tags')).toBeTruthy();
  });
});
