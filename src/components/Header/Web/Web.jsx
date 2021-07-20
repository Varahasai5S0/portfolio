import React from 'react';
import './web.css';

const Web = () => {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#about">
                <i class="fi-rr-user small-icon"></i>About Me
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <i class="fi-rr-laptop small-icon"></i>Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#project">
                <i class="fi-rr-briefcase small-icon"></i> Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i class="fi-rr-headset small-icon"></i> Contact
                </a>
            </div>
        </div>
    )
}

export default Web
