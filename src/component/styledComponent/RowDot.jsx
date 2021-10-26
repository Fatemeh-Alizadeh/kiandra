import React from 'react'
import darkColors from '../../Data/darkColors'
import SingleDot from './SingleDot'

const RowDot = () => {
    return (
        <div className="styleRow">
            {darkColors.map((dot) => {
                const{color, id} = dot
                return <SingleDot color={color} key={ id}/>
            })}
            
        </div>
    )
}

export default RowDot
