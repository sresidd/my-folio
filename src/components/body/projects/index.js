import React from 'react'
import Separator from '../../common/separator'
import { ProjectData } from '../../data/projects'
import ProjectCard from './project-card'
import './projects.css'

function Projects() {
  const data = ProjectData
  return (
    <div className='projects'>
      <Separator />
      <label className='section-title'>Projects</label>
      <div>
        {data.map((project)=>{
          return <ProjectCard project={project}/>
        })}
      </div>
      <label className='section-title'>Digital Works</label>

    </div>
  )
}

export default Projects