import React from 'react'
import ReactDOM from 'react-dom'
import './css/Main.scss'
import * as serviceWorker from './serviceWorker'
import Calculator from './components/calculator/Calculator'

const root = document.getElementById('root')

ReactDOM.render(
    <Calculator />
, root)

serviceWorker.unregister()
