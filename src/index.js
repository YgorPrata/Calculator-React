import React from 'react';
import ReactDOM from 'react-dom';
import './css/Main.scss';
import * as serviceWorker from './serviceWorker';
import Calculator from './components/calculator/Calculator';

ReactDOM.render(
    <Calculator />
, document.getElementById('root'));

serviceWorker.unregister();
