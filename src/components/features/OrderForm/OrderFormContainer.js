import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions } from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  option: getOrderOptions(state),
});

export default connect(mapStateToProps)(OrderForm);
