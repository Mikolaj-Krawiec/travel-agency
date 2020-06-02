import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.string,
    option: PropTypes.object,
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost={this.props.tripCost} option={this.props.option}/>
        </Col>
      </Row>
    );
  }
}

export default OrderForm;
