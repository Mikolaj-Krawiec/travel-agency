import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import parcing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.string,
    option: PropTypes.object,
    setOrderOption: PropTypes.func,
  }

  render() {
    return (
      <Row>
        {parcing.map(option => (
          <Col key={option.id} md={4}>
            <OrderOption {...option} currentValue={this.props.option[option.id]} setOrderOption={this.props.setOrderOption}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={this.props.tripCost} option={this.props.option}/>
        </Col>
      </Row>
    );
  }
}

export default OrderForm;
