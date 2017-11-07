import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counter } from './reducers/index';
import { StoreState } from './types/index';
import Counter from './containers/Counter';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<StoreState> (counter, {
  counterSymbol: "*",
  counterNum: 5
});

ReactDOM.render(
  <Provider store={store}>
  <Counter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
