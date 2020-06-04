import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({price, limits, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input className={styles.imputSmall} type='number' value={currentValue}
      min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)}
    />
    {` Price: ${formatPrice(price)}`}
  </div>
);

OrderOptionNumber.propTypes = {
  price: PropTypes.string,
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionNumber;
