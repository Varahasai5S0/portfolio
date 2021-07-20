import React from 'react';
import './body.css'; 
import About from './About/About';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Separator from '../Body/Separator/Separator';

const Body = () => {
    return (
        <div class="body">
            <section id='about'>
            <About/>
            </section>
           
            <section id='skills'>
            <Separator/>
            <Skills/>
            </section>
           
            <section id='project'>
            <Separator/>
                <Project/>
            </section>
                        
            <section id='contact'>
            <Separator/>
                <Contact/>
            </section>
        </div>
    )
}

export default Body
