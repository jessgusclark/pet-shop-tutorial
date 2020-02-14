import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import logger from 'redux-logger'

import AllDogsContainer from './containers/AllDogsContainer';
import { getAllDogs } from './operations';

import './App.css';

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

getAllDogs(store.dispatch);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Jesse's Pet Shop</h1>
        <AllDogsContainer />
      </div>
    </Provider>
  );
}

export default App;
