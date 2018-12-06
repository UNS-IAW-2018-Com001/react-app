import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider> ,
  document.getElementById('root')
);

serviceWorker.unregister();