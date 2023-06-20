import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import externalLight from 'public/external-link.svg'
import gitWhite from 'public/githubWhite.svg'
import more from 'public/more-info.svg'
const ProjectCard = (
    { project: { title, short, image, link, repo } }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='relative w-[300px] h-[200px]'>
                <Image src={image} className='absolute top-0 left-0 h-full  rounded-3xl ' />
                <div className="bg-[#0f0f00] absolute w-full h-full opacity-0 hover:opacity-90 transition-opacity ease-out text-light rounded-3xl p-4 duration-[400ms] flex items-center text-center ">
                    {short + ' '}
                    <Link href={link} target='_blank' className='transition-all hover:scale-110 hover:opacity-100 opacity-70 absolute bottom-4 right-4'>
                        <Image src={externalLight} className='w-8' />
                    </Link>
                    {link && <Link href={link} target='_blank' className='transition-all hover:scale-110 hover:opacity-100 opacity-70 absolute bottom-4 left-4'>
                        <Image src={more} className='w-7' />
                    </Link>}
                    {repo && <Link href={repo} target='_blank' className='transition-all hover:scale-110 hover:opacity-100 opacity-70 absolute bottom-4 left-[45%] '>
                        <Image src={gitWhite} className='w-8' />
                    </Link>}
                </div>

            </div>
            {title}
        </div>
    )
}

export default ProjectCard

// { pin: { postedBy, image, _id, destination, save } }) => {