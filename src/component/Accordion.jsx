import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import accordion from '../Data/accordion';

const Accordion = () => {
    const [readMore, setReadMore] = useState(false);
    const handleClick = (a) => {
        const c = accordion.find((d) => d.id === a)
        setReadMore(!readMore)
        {readMore &&  <div className="accordion-info"> {c.info} </div>}
        console.log(c.info)
       
            
        
    }

    return (
         <section className='accordion-container'>
            {accordion.map((item) => {
                const { id, heading, subheading, info } = item;
                
                return (
                     <div className="accordion" >
                        <div className="accordion-heading">
                            <div className="accordion-text">
                                <h5 className='accordion-title'>{ heading}</h5>
                                <p className='accordion-des'>{subheading} </p>
                            </div>
                            <button type='button' className='accordion-button' onClick={() => handleClick(id)}>
                                {readMore ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                            </button>
                            
                        </div>
                            
                        
                  </div>
                )
               
            })}
        </section>
    )
   
}

export default Accordion
