import React from 'react';
import {SocialData} from '../../data/Socialicons';
import './contact.css';

const Contact = () => { 
    const data = SocialData;
    return (
        <div className="contact">
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <label className="contact-title">Reach me through </label>
                <div className="contact-icons"> 
                    {  
                            data.map((item)=>{ 
                                return(
                                    <a href={item.link} className="social-icon-div">
                                        <img src={item.icon} alt='icon' className="social-icon"/>
                                    </a>
                                
                            )}
                        )
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact;
