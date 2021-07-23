import React from 'react';
import {ProjectData} from '../../data/Project';
import './project.css';
import ProjectCard from './ProjectCard';
import {Grid} from '@material-ui/core'

const Project = () => { 
    const data = ProjectData;
    return (
        <div classname="project">
                <label className="section-title">Project</label> 
                <div className="project-list">
                <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={4}
>
                {
                data.map((item)=>{
                    return(
                           <ProjectCard key={item.id} image={'aa'} desc={item.description} title={item.name} links={item.html_url}/>
                    )
                })
               }
               </Grid>
            </div>
        </div>
    )
}

export default Project
