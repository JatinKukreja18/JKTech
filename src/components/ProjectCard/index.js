import React from 'react';
import "./ProjectCard.scss";

function ProjectCard({project}) {
    return (
            <div className="ProjectCard" key={project.id}>
                <div className="ProjectCardContent">
                    <a
                        className={''}
                        target="_blank"
                        href={`${project.url}`}
                        >
                        <h4 className="ProjectTitle">{project.title}</h4>
                        <img  className="ProjectImage" src={project.img} alt={project.title}/>
                        <p className="ProjectType">{project.description}</p>
                
                    </a>
                </div>
            </div>
    );
}

export default ProjectCard;