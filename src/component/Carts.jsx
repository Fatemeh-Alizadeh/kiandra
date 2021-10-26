import React from 'react';
import carts from '../Data/carts';

const Carts = () => {
    return (
        <section className='carts-section'>
            {carts.map((cart) => {
                const { id, title, text } = cart
                return (
                    <div className="cart" key={id}>
                        <div className="cart-heading">
                            <p className='cart-subheading'>about</p>
                            <h3 className='cart-title'>{title}</h3>
                        </div>
                        
                        <p className='cart-des'>{text}</p>
                        <button type='button' className='cart-button'>read more</button>
                    </div>
                )
                
            })}
       </section>
    )
}

export default Carts
