import React,{useState} from 'react';
import {SocialData} from '../../data/Socialicons';
import emailjs from 'emailjs-com';
import EmailIcon from '@material-ui/icons/Email';
import './contact.css';
import Link from '@material-ui/core/Link';

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
              alert('Message sent successfully to Varaha Sai');
          }, (error) => {
              alert('Message not sent!!');
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
            <form  onSubmit={sendEmail} className="contact-form">
      <div>
          <label className="label-div">Name:</label>
          <input type="text" name="user_name" value={name} onChange={(e)=>setName(e.target.value)} required/>
      </div>
      <div>
        <label className="label-div">Email:</label>
        <input type="email" name="user_email" value={mail} onChange={(e)=>setMail(e.target.value)} required/>
      </div>
      <div>
      <label className="label-div">Message:</label><br/>
      <textarea name="message" rows="3" cols="30" value={message} onChange={(e)=>setMessage(e.target.value)} required/>
      </div>
      <button type="submit" style={{marginTop:'20px'}} class="btn btn-outline-primary">Send <EmailIcon/></button>
    </form>
            </div>
            </div>
            
           
            <div className="contact-container">
                <label className="contact-title">Reach me through </label>
                <div className="contact-icons"> 
                    {  
                            data.map((item)=>{ 
                                return(
                                    <Link href={item.link} className="social-icon-div" rel="noreferrer">
                                        <img src={item.icon} alt='icon' className="social-icon"/>
                                    </Link>
                                
                            )}
                        )
                        
                    }
                </div>
            </div>
        </div>
    )
}

export default Contact;
