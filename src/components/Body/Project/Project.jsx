import React from 'react';
import {ProjectData} from '../../data/Project';
import './project.css';
import ProjectCard from './ProjectCard';

const Project = () => { 
    const data = ProjectData;
    return (
        <div classname="project">
                <label className="section-title">Project</label> 
                <div className="project-list">
                {
                data.map((item)=>{
                    return(
                           <ProjectCard key={item.id} image={'aa'} desc={item.description} title={item.name} links={item.html_url}/>
                    )
                })
               }
            </div>
        </div>
    )
}

export default Project
