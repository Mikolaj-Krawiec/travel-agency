import React from 'react';
import styles from './OrderOption.scss';
import Icon from './../../common/Icon/Icon';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, currentValue, setOptionValue}) => (
  <div className={styles.icon}>
    {values.map(value => (
      <div key={value.id} className={`${styles.icon} ${value.id === currentValue ? styles.iconActive : ''}`} onClick={() => setOptionValue(value.id)}>
        <Icon name={value.icon}/>
        {`${value.name} ( ${formatPrice(value.price)} )`}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default OrderOptionIcons;
