import ll from 'public/PreviewLens.png'
import arnold from 'public/DALL·E 2023-06-29 16.07.19 - solar system, vibrant colors, van gogh style.png'
import impDemo from 'public/IMPDEMO.png'
import sitedemo from 'public/sitedemo.png'

export const projects = [
    {
        infoPath: '',
        title: 'Little Lens',
        short: 'Post Images, save Images, comment, and more!\nthis is an image sharing application (sorta like Pinterest)\n',
        description: 'Long description',
        image: ll,
        link: 'https://littlelensv1.netlify.app/',
        repo: 'https://github.com/ojn03/littleLens',
        technologies: ['React', 'Tailwind CSS', 'Sanity.io']

    },
    {
        infoPath: '',
        title: 'ojn.me',
        short: 'A website about a (really cool and handsome) guy named Olivier',
        description: 'Long description',
        image: sitedemo,
        link: '/',
        repo: 'https://github.com/ojn03/portfolio',
        technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS']

    },
    {
        infoPath: '',
        title: 'Polished Pixels',
        short: 'An image processor where users can import and export images in any format, and apply various filters to them.',
        description: 'Long description',
        image: impDemo,
        link: '',
        repo: '',
        technologies: ['Java', 'Swing']

    },
    {    
        infoPath: '',
        title: 'Arnold the Astronaut',
        short: 'A twitter bot that likes astronomy',
        description: 'Long description',
        image: arnold,
        link: '',
        repo: '',
        technologies: ['twitter API', 'NASA API', 'twitter4j']

    },
    // {    infoPath: '',
    //     title: 'Candid Conversations ',
    //     short: 'a demo chat application',
    //     description: 'Long description',
    //     image: 'https://picsum.photos/200/300',
    //     link: 'https://picsum.photos/200/300',
    //     repo: '',
    //     technologies: ['React', 'Next.js', 'Tailwind CSS']
    // },
    // {    infoPath: '',
    //     title: 'Resume Scraper',
    //     short: 'a resume parser',
    //     description: 'Long description',
    //     image: 'https://picsum.photos/200/300',
    //     link: 'https://picsum.photos/200/300',
    //     repo: '',
    //     technologies: ['Python', 'Regex', 'Numpys', 'Pandas']

    // },
    // {    infoPath: '',
    //     title: 'bug tracker',
    //     short: 'A project management tool',
    //     description: 'Long description',
    //     image: 'https://picsum.photos/200/300',
    //     link: 'https://picsum.photos/200/300',
    // git : '',
    //     technologies: ['NextJs', 'Tailwind CSS', 'MongoDB', 'Express', 'Node.js', 'PostgreSQL',]

    // },
    // {    infoPath: '',
    //     title: 'path finder',
    //     short: 'an interactive path finding visualizer',
    //     description: 'a tool demonstrates different path finding algorithms',
    //     image: 'https://picsum.photos/200/300',
    //     link: 'https://picsum.photos/200/300',
    // git : '',
    //     technologies: ['Next.js', 'Tailwind CSS']

    // },

]

export const experiences = [
    { 
        position: 'Discrete Structures TA',
        company: 'Khoury College',
        description: 'Assisted in teaching Discrete structures concepts such as combinations, graphs, and logical statements. Hosted office hours where I tutored students 1v1 and in groups. Helped grade assignments and exams, as well as review sessions for student exams. ',        
        location: 'Boston, MA',
        date: 'Fall - Winter 2022',
        technologies: ['tech1', 'tech2', 'tech3'],
        image: 'https://picsum.photos/200/300',
        link: 'https://www.khoury.northeastern.edu/',
        
    },
    {
        position: 'Development Research Assistant',
        company: 'Northeastern University',
        description: 'Aided reasearch efforts by categorizing and analyzing existing data. Wrote scripts in python to automate data collection and analysis.',
        location: 'Boston, MA',
        date: 'Fall 2021 - Spring 2023',
        technologies: ['tech1', 'tech2', 'tech3'],
        image: 'https://picsum.photos/200/300',
        link: 'https://example.com',
    },
    {
        position: 'Robotics Club',
        company: 'Jack E Singley Academy',
        description: 'Helped design, code, and build robots capable of navigating different environments and performing actions such as shooting a ball at a target or stacking blocks. Implemented autonomous systems as well as user controlled. Led a team to compete in VEX Robotics and FIRST Robotics Competitions.',
        location: 'Irving, TX',
        date: '2017 - 2021',
        link: 'https://www.irvingisd.net/SINGLEY',
    },
    {
        position: 'Merit Badge Counselor',
        company: 'Circle Ten Counci ',
        description: 'Created interactive lessons and actvities and led younger scouts to help them earn merit badges.',
        location: 'Grayford, TX',
        date: 'Summer 2019 - 2021',
        technologies: ['tech1', 'tech2', 'tech3'],
        image: 'https://picsum.photos/200/300',
        link: 'https://example.com',
    },

]