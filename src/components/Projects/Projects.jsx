import React from 'react'
import Title from '../Layout/Title'
import ProjectsCard from './ProjectsCard'
import { weather,advice,realEstate } from '../../assets/index'

const Projects = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center text-center'>
        <Title title={"VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"} des={"Recent projects"} />
        </div>
        <div className='grid grid-cols-3 gap-14'>
            <ProjectsCard
              title = "Real Estate Website"
              src = {realEstate}
            />
            <ProjectsCard
              title = "Weather App"
              src = {weather}
            />
            <ProjectsCard
              title = "Qoutes Generator"
              src = {advice}
            />
        </div>
    </section>
  )
}

export default Projects