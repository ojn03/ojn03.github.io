import React from 'react'
import { projects } from '../../utils/info'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Olivier-John Nzia | Projects',
}

//todo filter for skills

const page = () => {
  return (

    <div className='flex flex-col'>
      {/* <h1 className='text-4xl font-semibold text-center my-5'>Innovation that excites <span className='block text-base font-extralight'>* not sponsored by Nissan</span></h1> */}
      <div className='px-5 flex flex-col justify-center'>
        <div className='grid px-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-8  lg:gap-x-10 xl:gap-x-12 gap-y-5'>

          {/*map through projects and render a card for each one*/}
          {projects.map((project, idx) => (<ProjectCard project={project} key={idx} />))}
        </div>
      </div>
    </div>
  )
}

export default page