import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="about"> 
            <div className="about-info">
                Hello Folksâ <br/>
                I am <span className="info-name">Varaha Saið¨âð</span> <br/><br/>
                    I write Code ð±âð <br/>   I develop ð <br/> MERN STACK DEVELOPER<br/>
                    Codechef Campus Representative VIIT
            </div>
            <div className="about-image">
            <img className="picture" src={require('../../../assests/Programmer.gif').default}/>
            </div>
        </div>
    )
}

export default About
