import React from 'react'
import SingleDot from './SingleDot'
import darkColor2 from '../../Data/darlColor2'

const BigDotRow = () => {
    return (
         <div className="bigRow">
            {darkColor2.map((dot) => {
                const{color, id} = dot
                return <SingleDot color={color} key={ id}/>
            })}
            
        </div>
    )
}

export default BigDotRow
