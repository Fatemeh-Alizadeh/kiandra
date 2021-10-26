import React from 'react';
import Carts from './Carts' 


const AboutUs = () => {
    return (
       <section className="about">
            <div className="about-header">
                <h2 className="about-header_title">About Us</h2>
                <p className="about-header_text">Independence, informed debate, policy influence and reach.</p>
            </div>
            <div className="about-des">
                <p className="about-des_par">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis molestie est a ultrices. Proin elementum, lorem
                et dignissim tempus, ligula arcu pellentesque sapien, a imperdiet ex velit at urna. Quisque ac nisi turpis. Fusce
                ultricies elit quis dui vulputate, eu maximus enim molestie. Suspendisse potenti.</p>
                <ul class="about-des_list">
                    <li >
                        Undertaking research to understand the most important issues Australia faces.
                    </li>
                    <li>
                        Creating platforms to inform, stimulate ideas and promote debate of critical issues.
                    </li>
                    <li>
                        Facilitating collaboration to inspire innovative and progressive policy solutions.
                    </li>
                    <li>
                        Influencing decision makers by delivering compelling evidence and recommendations and advocating in support of our
                        positions.
                    </li>
                </ul>
                <p className="about-des_par">
                    Ut sit amet urna massa. Aliquam egestas metus quis elit volutpat malesuada. Integer efficitur porta commodo. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sed consectetur diam, non rutrum sem. Sed
                    non euismod lorem.
                    roin tincidunt sapien libero, nec dictum odio aliquet quis. Ut interdum arcu ut odio dictum, sit amet porta ipsum
                    sagittis.
                </p>
               
            </div>
            <Carts/>
        </section>
    )
}

export default AboutUs
