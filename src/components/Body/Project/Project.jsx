import React from 'react';
import {GithubData} from '../../data/Github';
import './project.css';
import ProjectCard from './ProjectCard';
import {Grid} from '@material-ui/core'

const Project = () => { 
    const data = GithubData;
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
                           <ProjectCard item={item} key={item.id}/>
                    )
                })
               }
               </Grid>
            </div>
        </div>
    )
}

export default Project
