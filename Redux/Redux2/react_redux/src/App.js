import React from 'react';
import { Provider } from 'react-redux'

import store from './redux/cake/store'
import CakeComponent from './components/cakeComponent'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
      </div>
    </Provider>
  );
}

export default App;
