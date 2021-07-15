import React from 'react';
import './body.css'; 
import About from './About/About';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import Contact from './Contact/Contact';

const Body = () => {
    return (
        <div class="body">
            <section id='about'>
            <About/>
            </section>
            <section id='skills'>
            <Skills/>
            </section>
            <section id='project'>
                <Project/>
            </section>
            <section id='contact'>
                <Contact/>
            </section>
        </div>
    )
}

export default Body
