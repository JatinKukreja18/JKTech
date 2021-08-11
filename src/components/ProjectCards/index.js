import React from 'react';
import ProjectCard from '../ProjectCard';
import projects from "./links";
import "./ProjectCards.scss";

function ProjectCards(props) {
    return (
        <div className={'ProjectCards '}>
            {projects.map(project => {
                return (
                <div className="col-md-6">
                    <ProjectCard project={project}/>
                </div>
                )
            })}
        </div>
    );
}

export default ProjectCards;