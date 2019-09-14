import React from 'react'
import './Button.scss'

export default props =>
    <button className=
        {`button 
            ${ props.grid2 ? 'grid-2' : '' }
            ${ props.operators ? 'operators' : '' }
        `}>
            { props.label }
    </button>