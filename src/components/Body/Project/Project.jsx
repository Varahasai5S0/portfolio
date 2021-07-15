import React from 'react';
import {ProjectData} from '../../data/Project';
import './project.css';

const Project = () => { 
    const data = ProjectData;
    return (
        <div classname="project">
            {
                data.map((item)=>{
                    return(
                        <div className="">
                    <p>{item.name}</p>
                    <img className="" style={{height:'50px'}} src={item.owner.avatar_url} alt='shjd'/>
                   </div>
                    )
                })
            }
        </div>
    )
}

export default Project
