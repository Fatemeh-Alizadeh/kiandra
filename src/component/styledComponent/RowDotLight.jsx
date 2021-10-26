import React from 'react'
import SingleDot from './SingleDot'
import lightColor from '../../Data/lightColor'

const RowDotLight = () => {
    return (
         <div className="styleRow">
            {lightColor.map((dot) => {
                const{color, id} = dot
                return <SingleDot color={color} key={ id}/>
            })}
            
        </div>
    )
}

export default RowDotLight
