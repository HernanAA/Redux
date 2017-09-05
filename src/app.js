import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBaKcr9zW4XNpFDwAUCrutK0EcokqtEdpE',
      authDomain: 'redux-f2f5e.firebaseapp.com',
      databaseURL: 'https://redux-f2f5e.firebaseio.com',
      projectId: 'redux-f2f5e',
      storageBucket: 'redux-f2f5e.appspot.com',
      messagingSenderId: '397600887191'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
