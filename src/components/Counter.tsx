import * as React from 'react';

export interface Props {
  counterSymbol: string;
  counterNum?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

class Counter extends React.Component<Props, {}> {
  render() {
    const {
      counterSymbol,
      counterNum = 1,
      onIncrement,
      onDecrement
    } = this.props;

    if (counterNum <= 0) {
      throw new Error('Need a valid number.');
    }

    return (
      <div className="Counter">
        <div className="printedCounter">
          {counterNum} = {printSymbols(counterSymbol, counterNum)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;

function printSymbols(_symbol: string, _count: number) {
  return Array(_count + 1).join(_symbol);
}
