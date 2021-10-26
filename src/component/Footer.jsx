import React, { useState } from 'react';
import vectorRed from '../lib/VectorRed.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { ImPlay2 } from "react-icons/im";

const Footer = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
    setChecked(!checked);
  };


    return (
        <footer >
            <div className="footer-contact">
                <p className='footer-contact_des'>
                    We acknowledge the Traditional Owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging.
                </p>
                <div className="contact-info">
                    <div className="contact">
                        <h6>Telephone</h6>
                         <p>+61 3 9123 4561</p>
                    </div>
                    <div className="contact">
                         <h6>Email </h6>
                        <p>info@logo.com.au</p>
                    </div>
 
                    <ul className='contact-list'>
                        <li>
                            Terms and conditions
                             </li>
                        <li>
                            Events policy
                        </li>
                        <li>
                            Careers
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-subc">
                <div>
                    <h5 className="footer-subc-heading">Stay up to date</h5>
                <p className="footer-subc-subheading">Subscribe to get the latest news and insights from our weekly update and research releases.</p>
                <form className='footer-form'>
                     <input
                        type='text'
                        className='form-input'
                        placeholder='First Name*'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
            type='text'
            className='form-input'
            placeholder='Last Name*'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            
                    />
                    <input
            type='text'
            className='form-input'
            placeholder='Email*'
           value={email}
             onChange={(e) => setEmail(e.target.value)}
            
                    />
                    <input
            type='text'
            className='form-input'
            placeholder='company*'
           value={company}
            onChange={(e) => setCompany(e.target.value)}
            
                    />
                    <div className="checkbox">
                        <input type="checkbox" id="fiction" name="fiction" value="fiction" onChange={ handleChange}/>
                        <label for="fiction" className="checkbox-label"></label>
                        <div className="checlbox-text">
                            <p>
                                Etiam vel orci vel massa accumsan aliquam. Nunc sit amet placerat . Read our terms and conditions
                            </p>
                        </div>
                    </div>
                   <button type='submit' className='form-submit'>Subscribe</button>
                </form>
                </div>
                
            <div className="twitter-feed">
            
                    <h4 className="twitter-feed-title">Twitter stream</h4>
                <div className="twitter-feed-logo">
                    <div className="twitter-logo">
                        <div className="logo-wrapper">
                            <img src={vectorRed} alt="" />
                        </div>
                        <div className="twitter-logo-text">
                            <h6>logo</h6>
                        <p>@logo news</p>
                        </div>
                        
                    </div>
                    </div>
            
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis molestie est a ultrices. Proin elementum, lorem et dignissim tempus, ligula arcu pellentesque sapien, a imperdiet ex velit at urna. Quisque ac nisi turpis. Fusce ultricies elit quis dui vulputate, eu maximus enim molestie.</p>    

            </div>
            </div>
            <div className="social-wrapper">
                 <div className="footer-social">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
                <ImPlay2 />
                </div>
                <div className="footer-text">
                    <p>
                         ABN 123 456 789  |   © 2020 LOGO  |  Privacy and data collection
                    </p>
                </div>
            </div>
           
        </footer>
    )
}

export default Footer
 
 


