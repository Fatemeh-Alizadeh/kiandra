import React, { useState, useRef } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import accordion from '../Data/accordion';

const Accordion = () => {
    const [data, setData] = useState(accordion)
    const [readMore, setReadMore] = useState(null);

    const toggle = (id) => {
        if (readMore === id) {
            return setReadMore(null)
        }
        setReadMore(id)
    }

    return (
         <section className='accordion-container'>
            {data.map((item) => {
                const { id, heading, subheading, info } = item;
        
                return (
                     <div className="accordion"  key={id} >
                        <div className="accordion-heading">
                            <div className="accordion-text">
                                <h5 className='accordion-title'>{ heading}</h5>
                                <p className='accordion-des'>{subheading} </p>
                            </div>
                            <button type='button' className='accordion-button' onClick={()=>toggle(id)}>
                                {readMore === id ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                            </button>
                            
                        </div>
                        {readMore === id && <div className="accordion-info">{info}</div>}
                        
                        
                  </div>
                )
               
            })}
        </section>
    )
   
}

export default Accordion
