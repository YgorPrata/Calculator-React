import React from 'react'
import './Button.scss'

export default props =>{
    return(
        <button 
            onClick={ () => props.click( props.label ) }

            className= {`button 
                ${ props.grid2 ? 'grid-2' : '' }
                ${ props.operators ? 'operators' : '' }
            `}>
                { props.label }
        </button>
    )
}