import React from 'react';
import {SocialData} from '../../data/Socialicons';
import TextField from '@material-ui/core/TextField';
import './contact.css';

const Contact = () => { 
    const data = SocialData;
    return (
        <div className="contact">
            <label className="section-title">Contact</label>
            
            <form className="" noValidate autoComplete="off">
            <div className="contact-form">
              <label>Name:</label>
              <input type="text" required />
              <br/>
              <label>Email:</label>
              <input type="email" required />
              <textarea>hiigkd gkd</textarea>               
            </div> 
            <button type="submit">Send message</button>
    </form>
           
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
