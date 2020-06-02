import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

class OrderSummary extends React.Component {
  static propTypes = {
    tripCost: PropTypes.string,
    option: PropTypes.object,
  }
  render() {
    return (
      <h2 className={styles.component}>Total <strong>${calculateTotal(formatPrice(this.props.tripCost),this.props.option)}</strong></h2>
    );
  }
}

export default OrderSummary;
