import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import Counter from '../components/Counter';

export function mapStateToProps({ counterSymbol, counterNum}: StoreState) {
  return {
    counterSymbol: counterSymbol,
    counterNum
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CounterAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementCounter()),
    onDecrement: () => dispatch(actions.decrementCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter as any)
