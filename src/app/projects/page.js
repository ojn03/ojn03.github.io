import React from 'react'
import { projects } from '../../utils/projects'
import ProjectCard from '@/components/ProjectCard'

const page = () => {
  return (

    <div className='flex justify-center'>
      <div className='grid px-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-8  lg:gap-x-10 xl:gap-x-12 gap-y-5'>
        {/*map through projects and render a card for each one*/}
        {projects.map((project) => (<ProjectCard project={project} />))}
      </div>
    </div>
  )
}

export default page