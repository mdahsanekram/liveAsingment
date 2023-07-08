import React from 'react';
// import { BrowserRouter as Router, Switch } from 'react-router-dom';
import store from '../src/store';
import { Provider } from 'react-redux';
import Home from './components/Home';

const App = () => {


	return (
		<Provider store={store} >
      <Home/>
    </Provider>
	);
};

export default App;

