import React from 'react';
import DaysToSummer from './DaysToSummer';
import { shallow } from 'enzyme';

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

describe('DaysToSummer', () => {
  it('should render correct value', () => {
    global.Date = mockDate('2020-06-19T11:57:58.135Z');

    const component = shallow(<DaysToSummer/>);
    expect(component.find('div').text()).toEqual('2 days to summer !');

    global.Date = trueDate;
  });

  it('should render 1 day instead of 1 days', () => {
    global.Date = mockDate('2020-06-20T11:57:58.135Z');

    const component = shallow(<DaysToSummer/>);
    expect(component.find('div').text()).toEqual('1 day to summer !');

    global.Date = trueDate;
  });

  it('should return empty object', () => {
    global.Date = mockDate('2020-08-22T00:00:00.000Z');

    const component = shallow(<DaysToSummer/>);
    expect(component).toEqual({});

    global.Date = trueDate;
  });

  it('should count days to summer in next year', () => {
    global.Date = mockDate('2020-09-23T00:00:00.000Z');

    const component = shallow(<DaysToSummer/>);
    expect(component.find('div').text()).toEqual('271 days to summer !');

    global.Date = trueDate;
  });
});
