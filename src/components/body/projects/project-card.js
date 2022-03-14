import React from 'react'
import './project-card.css'

function ProjectCard({project}) {
  return <div className='project-card'>
      <div className='project-info'>
          <label className='project-title'>{project.title}</label>
          <div className='project-links'>
            {project.demo&& (
                <a className='project-link' href={project.demo}>
                    <div className='link-button'>
                        <i class="fi fi-rs-globe-alt"></i>Demo
                    </div>
                </a>
            )}
            {project.git&& (
                <a className='project-link' href={project.git}>
                    <div className='link-button'>
                        <i class="devicon-github-original"></i>Gihub
                    </div>
                </a>
            )}            
          </div>
          <p>
              {project.about}
          </p>
          <div className='project-tags'>
                {project.tags.map((tag)=>{
                    return(
                        <label className='tag'>{tag}</label>
                    )
                })}
          </div>
      </div>
      <img src={project.image} className='project-photo' />
  </div>
}

export default ProjectCard