import React from 'react'
import lightColor2 from '../../Data/lightColor2';
import SingleDot from './SingleDot';

const RowLight2 = () => {
    return (
        <div className="styleRow">
            {lightColor2.map((dot) => {
                const{color, id} = dot
                return <SingleDot color={color} key={ id}/>
            })}
            
        </div>
    )
}

export default RowLight2
