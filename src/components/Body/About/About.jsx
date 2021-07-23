import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="about"> 
            <div className="about-info">
                Hello Folks✌ . <br/>
                I am <span className="info-name">Varaha Sai</span> <br/><br/>
                    I write ...  <br/>   I develop .... <br/> MERN STACK DEVELOPER<br/>
                    Codechef Campus Representative
            </div>
            <div className="about-image">
            <img className="picture" src={require('../../../assests/Programmer.gif').default}/>
            </div>
        </div>
    )
}

export default About
