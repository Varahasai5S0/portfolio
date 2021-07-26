import React from 'react';
import {SkillData} from '../../data/Skill';
import './skills.css';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const Skills = () => { 
    const data = SkillData;
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
    return (
        <div className="skill">  
            <label className="section-title">Skills</label>
            {
                data.map((item)=>{
                    return(
                        <div className="skill-type">
                            <div className="skill-div">
                            <div className="skill-div-info-left">
                            </div>
                            <label className="skill-info">{item.type}</label>
                            <div className="skill-div-info-right">
                            </div>
                            </div>
                            <div className="skill-icons">
                                {
                                    item.list.map((items)=>{
                                        return(
                                            <Tooltip title={items.name}> 
                                            <div className="skill-icon">      
                                                   {items.icon}                                  
                                            </div> 
                                            </Tooltip>
                                        )
                                    }) 
                                }
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Skills
