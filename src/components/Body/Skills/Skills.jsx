import React from 'react';
import {SkillData} from '../../data/Skill';
import './skills.css';

const Skills = () => { 
    const data = SkillData;
    return (
        <div className="skill">  
            <label className="section-title">Skills</label>
            {
                data.map((item)=>{
                    return(
                        <div className="skill-type">
                            <label>{item.type}</label>
                            <div className="skill-icons">
                                {
                                    item.list.map((items)=>{
                                        return(
                                            <div className="skill-icon">
                                            {items.icon}
                                            </div>
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
