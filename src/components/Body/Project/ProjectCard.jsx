import React from 'react';
import './projectcard.css';


const ProjectCard = ({title,desc,image}) => {
  return (
    <div className="card" style={{width: "18rem",minHeight:"18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{desc}</p>
      <a href="#" className="card-link">Card link</a>
    </div>
  </div>
  );
}

export default ProjectCard
