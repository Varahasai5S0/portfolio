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
                <a href="">
                    About Me
                </a>
            </div>
            <div className="mobile-option">
                <a href="">
                    Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="">
                    Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="">
                    Contact
                </a>
            </div>
           </div>
        </div>
    )
}

export default Mobile
