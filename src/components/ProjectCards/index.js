import React from 'react';
import ProjectCard from '../ProjectCard';
import projects from "./links";
import "./ProjectCards.scss";

function ProjectCards(props) {
    return (
        <div className={'ProjectCards '}>
            {projects.map((project,index) => {
                return (
                <div className="col-md-6" key={'project' + index}>
                    <ProjectCard project={project}/>
                </div>
                )
            })}
        </div>
    );
}

export default ProjectCards;