import React from 'react'
import './Button.scss'

export default props =>
    <button className={ 'grid-column-' + props.columns + ' button' }>{ props.label }</button>