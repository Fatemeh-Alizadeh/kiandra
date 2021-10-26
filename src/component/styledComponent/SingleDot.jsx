import React from 'react'

const SingleDot = ({id, color}) => {
    console.log(color)
    return (
                  <div className='dot' key={id}
            style={{backgroundColor: color}}>
            
        </div>  
               
        
    )
}

export default SingleDot
