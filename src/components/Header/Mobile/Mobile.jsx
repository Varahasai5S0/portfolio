import React from 'react';
import './mobile.css';

const Mobile = ({isOpen,setIsOpen}) => {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
            <i class="fi-rr-cross-circle"></i>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#about">
                <i class="fi-rr-user small-icon"></i>About Me
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                <i class="fi-rr-laptop small-icon"></i> Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#project">
                <i class="fi-rr-briefcase small-icon"></i> Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                <i class="fi-rr-headset small-icon"></i> Contact
                </a>
            </div>
           </div>
        </div>
    )
}

export default Mobile
