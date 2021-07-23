import React,{useState} from 'react';
import {SocialData} from '../../data/Socialicons';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => { 
    const [mail, setMail] = useState();
    const [name,setName] = useState();
    const [message,setMessage] = useState();

    const data = SocialData;
    function sendEmail(e) {
        e.preventDefault();
      
        const user= {
            message:message,
            from_name:name,
            reply_to:mail,
        }
        setMail('');
        setMessage('');
        setName('');
        emailjs.send("service_g2al268","template_mvyxovd", user, 'user_t6hwCX0lN7eTXgKy9saYi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    return (
        <div className="contact">
            <label className="section-title">Contact</label>
            <div className="contact-page">
             <div>
            <img src={require('../../../assests/mail.gif').default} style={{height:"300px",width:"300px"}} />
             </div>
            <div>
            <form   className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" value={name} onChange={(e)=>setName(e.target.value)} required/>
      <label>Email</label>
      <input type="email" name="user_email" value={mail} onChange={(e)=>setMail(e.target.value)} required/>
      <label>Message</label>
      <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} required/>
      <input type="submit" value="Send" />
    </form>
            </div>
            </div>
            
           
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
