import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyAccount from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyAccount />, document.getElementById('root'));
registerServiceWorker();
