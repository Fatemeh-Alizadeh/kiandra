import React from 'react';
import { BsArrowDown } from "react-icons/bs";
import countries from '../Data/countries';


const Network = () => {
    return (
        <section className='network-container'>
            <div className="network-text">
                <div className="network-des">
                    <h3 className='network-heading'>International Network</h3>
                    <p className='network-par'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis molestie est a ultrices.
Fusce ultricies elit quis dui vulputate, eu maximus enim molestie. Suspendisse potenti. Ut sit amet urna massa. 
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed consectetur diam, non rutrum sem. Sed non euismod lorem. </p>
                </div>
                <div className="network-list">
                     {countries.map((country) => {
                    const { id, name, des } = country
                    return (
                        <div className="network-item" key={id}>
                            <h6 className='network-country'>{name}</h6>
                            <p className='network-country-des'>{des}</p>
                            </div>    
                            )
                        
                    })}
                </div>
               
                

            </div>
            <div className="network-resourse">
                <h5 className='resourse-text'>Downloadable resources</h5>
                <button type='button' className='resourse-button'><BsArrowDown />20201 lipsum outlook</button>
            </div>
       </section>
    )
}

export default Network
