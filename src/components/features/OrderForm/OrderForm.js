import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import parcing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, tripCountry, tripId, tripName) => {
  if(!options.name || !options.contact){
    alert('fill in name and contact fields');
    return;
  }
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    tripCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

class OrderForm extends React.Component {
  static propTypes = {
    tripCost: PropTypes.string,
    option: PropTypes.object,
    setOrderOption: PropTypes.func,
    tripCountry: PropTypes.string,
    tripId: PropTypes.string,
    tripName: PropTypes.string,
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
          <Button onClick={() => sendOrder(this.props.option, this.props.tripCost, this.props.tripCountry, this.props.tripId, this.props.tripName)}>Order now!</Button>
        </Col>
      </Row>
    );
  }
}

export default OrderForm;
